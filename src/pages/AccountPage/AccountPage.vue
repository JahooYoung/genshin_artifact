<template>
    <div>
        <el-dialog
            :title="t('accountPage.chooseSyncBase')"
            width="30%"
            v-model="showSyncDialog"
            @closed="handleSyncDialogClosed!()"
        >
            <div>
                <el-button
                    @click="selectSyncType!('local')"
                >
                    {{ t('accountPage.browserBase') }} ( {{ t('accountPage.lastModifiedAt') + new Date(localLastModified).toLocaleString()}} )
                </el-button>
            </div>
            <div style="margin-top: 10px;">
                <el-button
                @click="selectSyncType!('file')"
                >
                    {{ t('accountPage.fileBase') }} ( {{ t('accountPage.lastModifiedAt') + new Date(fileLastModified).toLocaleString()}} )
                </el-button>
            </div>
        </el-dialog>

        <div class="top-things">
            <el-row>
                <el-col :span="6">
                    <span>{{ t('accountPage.title') }}</span>
                </el-col>
                <el-col :span="18">
                    <div style="float: right">
                        <el-button
                            type="primary"
                            size="small"
                            :icon="IconEpSort"
                            @click="handleSync"
                        >
                            {{ t('accountPage', 'syncButton') }}
                        </el-button>
                    </div>
                </el-col>
            </el-row>
            <el-divider style="margin: 12px 0"></el-divider>
        </div>

        <div class="toolbar">
            <el-button
                type="primary"
                :icon="IconEpPlus"
                @click="addAccount"
            >
                {{ t('accountPage.addAccount') }}
            </el-button>
        </div>

        <div class="body">
            <div
                v-for="{id, name} in accountStore.allAccounts"
                :key="id"
                class="item is-active"
                :class="{ active: id === accountStore.currentAccountId.value }"
                @click="handleChangeAccount(id)"
            >
                <click-edit-label
                    :value="name"
                    @input="(newName: string) => handleChangeName(id, name, newName)"
                    fontsize="16px"
                    :editable="true"
                    style="display: inline-block;"
                ></click-edit-label>
                <div class="buttons">
                    <el-popconfirm
                        :title="t('accountPage.confirmDelete')"
                        @confirm="handleDeleteAccount(id)"
                    >
                        <template #reference>
                            <el-button
                                v-show="id !== accountStore.currentAccountId.value"
                                :icon="IconEpDelete"
                                type="danger"
                                link
                                size="default"
                                circle
                                class="button"
                                :title="t('accountPage.delete')"
                                @click.stop=""
                            ></el-button>
                        </template>
                    </el-popconfirm>
                    <!-- <el-button
                        icon="el-icon-download"
                        type="text"
                        size="medium"
                        circle
                        @click="handleDownload(name, item)"
                        class="button"
                        title="导出"
                    ></el-button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"
import ClickEditLabel from "@c/misc/ClickEditLabel"
import IconEpPlus from "~icons/ep/plus"
import IconEpSort from "~icons/ep/sort"
import IconEpDelete from "~icons/ep/delete"
import {useI18n} from "@/i18n/i18n"

import { useAccountStore, deleteAccount, changeAccount, reload, migrateBackend, updateCachedHashDict, type MonaMeta } from "@/store/pinia/account"
import { localBackend, fileBackend, type BackendMeta } from "@/store/backend_v2"

// i18n
const { t } = useI18n()

const accountStore = useAccountStore()

function addAccount() {
    accountStore.addAccount(t('accountPage.newAccountName'))
}

async function handleDeleteAccount(id: number) {
    const loading = ElLoading.service({
        lock: true,
        text: t('accountPage.deletingAccount')
    })
    await deleteAccount(id)
    loading.close()
}

async function handleChangeAccount(id: number) {
    if (id === accountStore.currentAccountId.value) {
        return
    }
    const loading = ElLoading.service({
        lock: true,
        text: t('accountPage.switchingAccount')
    })

    // ElLoading存在bug，导致滚动条会被拿掉，如果changeAccount太快会导致滚动条突然消失又突然出现，因此这里设置至少切换1s
    let change = changeAccount(id)
    // let timer = new Promise((resolve, reject) => {
    //     setTimeout(() => { resolve(null) }, 1000)
    // })
    // await Promise.all([change, timer])
    await change

    loading.close()
}

function handleChangeName(id: number, oldName: string, newName: string) {
    if (newName !== oldName && newName !== '') {
        accountStore.changeAccountName(id, newName)
    }
}


const showSyncDialog = ref(false)
const localLastModified = ref(0)
const fileLastModified = ref(0)
const selectSyncType = ref<((t: 'local' | 'file') => void) | null>(null)
const handleSyncDialogClosed = ref<(() => void) | null>(null)

async function sync(type: 'local' | 'file') {
    if (type === 'local') {
        await fileBackend.importContent(...await localBackend.exportContent())
        ElMessage.success(t('accountPage.message.syncedOnBrowser'))
    } else if (type === 'file') {
        await localBackend.importContent(...await fileBackend.exportContent())
        await updateCachedHashDict()
        await reload()
        ElMessage.success(t('accountPage.message.syncedOnFile'))
    }
}

function querySyncType(localMeta: BackendMeta, fileMeta: BackendMeta) {
    return new Promise<'local' | 'file'>((resolve, reject) => {
        localLastModified.value = localMeta.lastModified
        fileLastModified.value = fileMeta.lastModified
        let resolved = false
        selectSyncType.value = (type: 'local' | 'file') => {
            resolved = true
            showSyncDialog.value = false
            resolve(type)
        };
        handleSyncDialogClosed.value = () => {
            if (!resolved) {
                reject(new Error('canceled'))
            }
        }
        showSyncDialog.value = true
    })
}

function compareVersions(local: string[], file: string[]) {
    const n = Math.min(local.length, file.length)
    for (let i = 0; i < n; i++) {
        if (local[i] !== file[i]) {
            return 'conflicted'
        }
    }
    if (local.length === file.length) {
        return 'synced'
    }
    return local.length > file.length ? 'local-new' : 'file-new'
}

async function handleSync() {
    if (!await fileBackend.prompt()) {
        // alert(t('accountPage.cancelSyncing'))
        ElMessage.error(t('accountPage.cancelSyncing'))  // TODO: not work
        return
    }
    // localBackend is always migrated
    await migrateBackend(fileBackend)
    const localMonaMeta = await localBackend.getItem('mona_meta') as MonaMeta
    const fileMonaMeta = await fileBackend.getItem('mona_meta') as MonaMeta | null
    switch (compareVersions(localMonaMeta.versionHashes, fileMonaMeta?.versionHashes ?? [])) {
        case 'conflicted':
            const metas = await Promise.all([localBackend.getMeta(), fileBackend.getMeta()])
            let type: 'local' | 'file'
            try {
                type = await querySyncType(metas[0], metas[1])
            } catch (err) {
                ElMessage.error(t('accountPage.cancelSyncing'))
                return
            }
            await sync(type)
            break
        case 'synced':
            ElMessage.success(t('accountPage.message.syncedAlready'))
            break
        case 'local-new':
            await sync('local')
            break
        case 'file-new':
            await sync('file')
            break
    }
}

</script>

<style lang="scss" scoped>
.body {
    display: flex;
    flex-wrap: wrap;
}

.toolbar {
    margin-bottom: 20px;
}

$height: 60px;

.item {
    height: $height;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    line-height: $height;
    color: #303133;
    transition: 200ms;

    &.active {
        color: #409EFF;
        background: #ecf5ff;
    }

    &:hover {
        background: #ecf5ff;
    }

    .buttons {
        float: right;
        height: $height;

        .button {
            margin: 0;
        }
    }
}
</style>
