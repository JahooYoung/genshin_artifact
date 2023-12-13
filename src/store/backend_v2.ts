import localforage from "localforage"

const BACKEND_META_KEY = 'backend_meta'
const BACKEND_VERSION = 1

export interface BackendMeta {
    version: number;
    lastModified: number;
}

function genMeta(): BackendMeta {
    return {
        version: BACKEND_VERSION,
        lastModified: new Date().getTime(),
    }
}

const JSON_FIRST_CHAR_SET = new Set(['{', '[', '"'])

/**
 * 假设这个存储是足够快的
 */
class LocalBackend {
    // localforage apis all return Promise

    // clear = localforage.clear.bind(localforage)
    // getItem = localforage.getItem.bind(localforage)
    // setItem = localforage.setItem.bind(localforage)
    // removeItem = localforage.removeItem.bind(localforage)

    exportContent(): Promise<[[string, any][], BackendMeta]> {
        const content = [] as [string, any][]
        let meta: BackendMeta
        return localforage.iterate((value, key) => {
            if (key === BACKEND_META_KEY) {
                meta = value as BackendMeta
            } else {
                content.push([key, value])
            }
        }).then(() => [content, meta])
    }

    async importContent(content: [string, any][], meta: BackendMeta) {
        await localforage.clear()
        for (const [key, value] of content) {
            await localforage.setItem(key, value)
        }
        await localforage.setItem(BACKEND_META_KEY, meta)
    }

    async getItem(key: string) {
        const content = await localforage.getItem(key)
        return typeof content === 'string' && JSON_FIRST_CHAR_SET.has(content.charAt(0)) ? JSON.parse(content) : content
    }

    async setItem(key: string, value: any) {
        await localforage.setItem(key, value)
        await localforage.setItem(BACKEND_META_KEY, genMeta())
    }

    async removeItem(key: string) {
        await localforage.removeItem(key)
        await localforage.setItem(BACKEND_META_KEY, genMeta())
    }

    async getMeta() {
        return await this.getItem(BACKEND_META_KEY) as BackendMeta
    }
}

/**
 * 1. 文件读写API速度较慢，但同一时间可能有多个写请求，因此有写优化（仅保留最后一次写）
 * 2. 考虑到文件可能会被外部修改（云盘同步），内部在内存维护一个元数据以及一个元数据文件的handle
 *    每次写之前检查两个元数据的一致性，若不一致立刻断开连接
 * 3. 写的API返回promise，但如果后续有新的写入，这次写入可能被忽略
 * 4. 提供一个等待所有写完成的接口（须保证接口返回前无新的写请求）
 * 5. 读的API返回的是对该key的所有写完成之后的内容
 */
class FileBackend {
    private dirHandle: any = null

    private async clear() {
        const promises = []
        for await (const name of this.dirHandle.keys()) {
            promises.push(this.dirHandle.removeEntry(name))
        }
        await Promise.all(promises)
    }

    private async write(key: string, value: string) {
        const filename = key + '.json'
        const fileHandle = await this.dirHandle!.getFileHandle(filename, { create: true })
        const writable = await fileHandle.createWritable()
        await writable.write(value)
        await writable.close()
    }

    async prompt() {
        if (this.dirHandle !== null) {
            try {
                await this.dirHandle.getFileHandle('anything')
                return true
            } catch (err: any) {
                if (err.name !== 'NotFoundError') {
                    this.dirHandle = null
                } else {
                    return true
                }
            }
        }
        try {
            this.dirHandle = await (window as any).showDirectoryPicker({
                mode: 'readwrite'
            })
        } catch (err) {
            return false
        }
        return true
    }

    disconnect() {
        this.dirHandle = null
    }

    connected() {
        return this.dirHandle !== null
    }

    async exportContent(): Promise<[[string, any][], BackendMeta]> {
        const promises = []
        for await (const entry of this.dirHandle.values()) {
            const promise = (entry.getFile() as Promise<File>)
                .then(file => file.text())
                .then(text => [entry.name.slice(0, -5), JSON.parse(text)] as [string, any])
            promises.push(promise)
        }
        const result = await Promise.all(promises)
        let meta: BackendMeta
        const content = result.filter((value) => {
            if (value[0] === BACKEND_META_KEY) {
                meta = value[1]
                return false
            } else {
                return true
            }
        })
        return [content, meta!]
    }

    async importContent(content: [string, any][], meta: BackendMeta) {
        if (!this.dirHandle) {
            throw new Error('file backend is not connected')
        }
        await this.clear()
        await Promise.all(content.map(value => this.write(value[0], JSON.stringify(value[1]))))
        await this.write(BACKEND_META_KEY, JSON.stringify(meta))
    }

    async getItem(key: string) {
        if (!this.dirHandle) {
            throw new Error('file backend is not connected')
        }
        const filename = key + '.json'
        try {
            const fileHandle = await this.dirHandle.getFileHandle(filename)
            const file = await fileHandle.getFile()
            const content = await file.text()
            return JSON.parse(content)
        } catch (err: any) {
            if (err.name !== 'NotFoundError') {
                console.error(err)
            }
            return null
        }
    }

    async getMeta() {
        return await this.getItem(BACKEND_META_KEY) as BackendMeta
    }
}

export const localBackend = new LocalBackend()
export const fileBackend = new FileBackend()
export type Backend = LocalBackend | FileBackend
