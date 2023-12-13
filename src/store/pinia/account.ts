import { computed, reactive, ref, watch, toRaw } from "vue"
import { deepCopy } from "@/utils/common"
import { localBackend as backend, type Backend, type BackendMeta } from "../backend_v2"
import { useArtifactStore, watchContent as artifactWatchContent, defaultWatchContent as artifactDefaultWatchContent } from "./artifact"
import { useKumiStore, watchContent as kumiWatchContent, defaultWatchContent as kumiDefaultWatchContent } from "./kumi"
import { usePresetStore, watchContent as presetWatchContent, defaultWatchContent as presetDefaultWatchContent } from "./preset"
import { useSequenceStore, watchContent as sequenceWatchContent, defaultWatchContent as sequenceDefaultWatchContent } from "./sequence"
import objectHash from "object-hash"
import { useDebounceFn } from "@vueuse/core"

interface Account {
    id: number;
    name: string;
}

/**
 * localStorage scheme (version 1):
 * mona_meta: { version: 1 }
 * mona_accounts: { currentAccountId: number, allAccounts: [{ id: number, name: string }, ...] }
 * mona_account_artifacts_<id>: { flower: {...}, ... }
 * mona_account_presets_<id>: { ... }
 * mona_account_kumi_<id>: { ... }
 *
 * localStorage scheme (version 2):
 * mona_meta: { version: 2, versionHashes: string[] }
 * mona_account_version_hash_<id>: string
 * other keys are the same as version 1
 */
const VERSION_STORAGE = 2

interface MonaMetaV1 {
    version: number
}

interface MonaMetaV2 {
    version: number
    versionHashes: string[]
}

export type MonaMeta = MonaMetaV2

function migrateBackendToV2(data: [Record<string, any>, BackendMeta]): [Record<string, any>, BackendMeta] {
    const [record, meta] = data
    if (record['mona_meta'].version >= 2) {
        return data
    }
    if (record['mona_meta'].version !== 1) {
        throw new Error('migrateBackendToV2 only accepts version 1')
    }
    const accountHashDict: Record<number, string> = {}
    for (const account of record['mona_accounts'].allAccounts as Account[]) {
        // console.log('migrate kumi', account.id, record[`mona_account_kumi_${account.id}`])
        const accountContentHashes = [
            objectHash(record[`mona_account_artifacts_${account.id}`] ?? artifactDefaultWatchContent),
            objectHash(record[`mona_account_kumi_${account.id}`] ?? kumiDefaultWatchContent),
            objectHash(record[`mona_account_presets_${account.id}`] ?? presetDefaultWatchContent),
            objectHash(record[`mona_account_sequence_${account.id}`] ?? sequenceDefaultWatchContent),
        ]
        // console.log('migrating account hashes', account.id, accountContentHashes)
        const accountHash = objectHash(accountContentHashes)
        accountHashDict[account.id] = accountHash
        record[`mona_account_version_hash_${account.id}`] = accountHash
    }

    const accountListHash = objectHash(record['mona_accounts'])
    const overallHash = objectHash([accountListHash, accountHashDict])
    record['mona_meta'] = {
        version: 2,
        versionHashes: [overallHash],
    }
    return [record, meta]
}

export async function migrateBackend(backend: Backend) {
    const metaData = await backend.getItem('mona_meta') as MonaMetaV1 | MonaMetaV2 | null
    if (!metaData) {
        return
    }
    if (metaData.version === VERSION_STORAGE) {
        return
    }
    const exportData = await backend.exportContent()
    const record: Record<string, any> = {}
    for (const [key, value] of exportData[0]) {
        record[key] = value
    }
    let data: [Record<string, any>, BackendMeta] = [record, exportData[1]]

    data = migrateBackendToV2(data)
    // future migrations here

    await backend.importContent(Object.entries(data[0]), data[1])
}

function createAccountStore() {
    const currentAccountId = ref<number>(1)
    const allAccounts = reactive<Account[]>([{
        id: 1,
        name: 'default'
    }])
    let nextId = 2;

    function initNextId() {
        nextId = 0;
        for (const { id } of allAccounts) {
            nextId = Math.max(nextId, id);
        }
        nextId++;
    }

    function init(payload: { currentAccountId: number, allAccounts: Account[] } | null) {
        if (payload) {
            currentAccountId.value = payload.currentAccountId
            allAccounts.splice(0, allAccounts.length, ...payload.allAccounts)
            initNextId()
        } else {
            currentAccountId.value = 1
            allAccounts.splice(0, allAccounts.length, {
                id: 1,
                name: 'default'
            })
        }
    }

    function addAccount(name: string) {
        allAccounts.push({
            id: nextId++,
            name,
        })
    }

    function deleteAccount(id: number) {
        for (let i = 0; i < allAccounts.length; i++) {
            if (allAccounts[i].id === id) {
                allAccounts.splice(i, 1)
                break
            }
        }
    }

    function changeAccountName(id: number, name: string) {
        for (const account of allAccounts) {
            if (account.id === id) {
                account.name = name;
                break;
            }
        }
    }

    const currentAccountName = computed(() => {
        return allAccounts.find(a => a.id === currentAccountId.value)?.name
    })

    return {
        currentAccountId,
        allAccounts,
        currentAccountName,

        init,
        addAccount,
        deleteAccount,
        changeAccountName,
    }
}

const accountStore = createAccountStore()

export const useAccountStore = () => accountStore


const artifactStore = useArtifactStore()
const presetStore = usePresetStore()
const kumiStore = useKumiStore()
const sequenceStore = useSequenceStore()

let disableWatchEffect = true

function nextTick() {
    return new Promise((resolve) => {
        setTimeout(resolve, 10)
    })
}

async function loadAccountData() {
    disableWatchEffect = true
    // console.log('start to load', disableWatchEffect)
    const id = accountStore.currentAccountId.value
    const artKey = `mona_account_artifacts_${id}`
    artifactStore.init(await backend.getItem(artKey))
    const presetKey = `mona_account_presets_${id}`
    presetStore.init(await backend.getItem(presetKey))
    const kumiKey = `mona_account_kumi_${id}`
    kumiStore.init(await backend.getItem(kumiKey))
    const seqKey = `mona_account_sequence_${id}`
    sequenceStore.init(await backend.getItem(seqKey))
    // no need to load version hash, it will be loaded by the watch function
    await nextTick()
    // console.log('loaded', disableWatchEffect)
    disableWatchEffect = false
}

export async function changeAccount(id: number) {
    // await backend.allReady()
    accountStore.currentAccountId.value = id
    await nextTick()
    await loadAccountData()
}

export async function deleteAccount(id: number) {
    if (id === accountStore.currentAccountId.value) {
        // this should not happen, but add a guard here
        return
    }
    accountStore.deleteAccount(id)
    const keysToRemove = [
        `mona_account_artifacts_${id}`,
        `mona_account_presets_${id}`,
        `mona_account_kumi_${id}`,
        `mona_account_sequence_${id}`,
        `mona_account_version_hash_${id}`,
    ]
    for (const key of keysToRemove) {
        await backend.removeItem(key)
    }
}

export async function reload() {
    disableWatchEffect = true
    accountStore.init(await backend.getItem('mona_accounts') as any)
    await loadAccountData()
}

async function initBackendFromLocalStorage() {
    backend.setItem('mona_accounts', deepCopy(accountWatchContent()))
    const artString = localStorage.getItem('artifacts')
    await backend.setItem('mona_account_artifacts_1', artString && JSON.parse(artString))
    const kumiString = localStorage.getItem('kumi2')
    await backend.setItem('mona_account_kumi_1', kumiString && JSON.parse(kumiString))
    const presetString = localStorage.getItem('presets5')
    await backend.setItem('mona_account_presets_1', presetString && JSON.parse(presetString))
}

async function init_store() {
    let metaData = await backend.getItem('mona_meta')
    if (!metaData) {
        metaData = {
            version: 1,
        }
        await backend.setItem('mona_meta', metaData)

        // copy data from localStorage to backend
        await initBackendFromLocalStorage()
    }
    await backend.setItem('mona_meta', { version: 1 })
    await migrateBackend(backend)
    await updateCachedHashDict()
    await reload()
}

init_store()

function updateCurrentAccount(type: string, value: any) {
    if (disableWatchEffect) {
        return
    }
    // console.log('update', type, disableWatchEffect)
    const key = `mona_account_${type}_${accountStore.currentAccountId.value}`
    backend.setItem(key, deepCopy(value))
}

watch(artifactWatchContent, value => updateCurrentAccount('artifacts', value), { deep: true })
watch(kumiWatchContent, value => updateCurrentAccount('kumi', value), { deep: true })
watch(presetWatchContent, value => updateCurrentAccount('presets', value), { deep: true })
watch(sequenceWatchContent, value => updateCurrentAccount('sequence', value), { deep: true })

const artifactHash = computed(() => objectHash(artifactWatchContent()))
const kumiHash = computed(() => objectHash(kumiWatchContent()))
const presetHash = computed(() => objectHash(presetWatchContent()))
const sequenceHash = computed(() => objectHash(sequenceWatchContent()))
const currentAccountHash = computed(() => objectHash([artifactHash.value, kumiHash.value, presetHash.value, sequenceHash.value]))

watch(currentAccountHash, value => updateCurrentAccount('version_hash', value), { deep: true })

function accountWatchContent() {
    return {
        currentAccountId: accountStore.currentAccountId.value,
        allAccounts: accountStore.allAccounts,
    }
}

const cachedHashDict = ref<Record<number, string>>({})

export async function updateCachedHashDict() {
    const allAccounts: Account[] = (await backend.getItem('mona_accounts')).allAccounts
    for (const account of allAccounts) {
        cachedHashDict.value[account.id] = await backend.getItem(`mona_account_version_hash_${account.id}`) as string
    }
}

watch(accountWatchContent, async value => {
    if (disableWatchEffect) {
        return
    }
    await backend.setItem('mona_accounts', deepCopy(value))
    await updateCachedHashDict()
}, { deep: true })

const accountListHash = computed(() => objectHash(accountWatchContent()))
const overallHash = computed(() => {
    const accountHashDict = {
        ...cachedHashDict.value,
        [accountStore.currentAccountId.value]: currentAccountHash.value,
    }
    // console.log('calc overall hash', accountListHash.value, accountHashDict)
    return objectHash([accountListHash.value, accountHashDict])
})


const debouncedCommitVersion = useDebounceFn(async (hash: string) => {
    if (disableWatchEffect) {
        return
    }
    let metaData = await backend.getItem('mona_meta') as MonaMeta
    if (metaData.versionHashes.length === 0 || metaData.versionHashes[metaData.versionHashes.length - 1] !== hash) {
        // console.log('commit version', hash)
        metaData.versionHashes.push(hash)
        await backend.setItem('mona_meta', metaData)
    }
}, 2000)

watch(overallHash, debouncedCommitVersion, { deep: true })
