<template>
  <NuxtLayout>
    <template #header>
      <AtmButton color="primary" variant="outlined" icon="ic:baseline-logout">
        {{ $t("layouts.default.button.logout") }}
      </AtmButton>
    </template>
    <template #main>
      <div class="flex flex-col gap-4">
        <div>
          <AtmButton color="primary" variant="outlined" icon="ic:baseline-arrow-back">
            ホームへ戻る
          </AtmButton>
        </div>
        <AtmCard color="primary" class="p-4 flex-col gap-4">
          <div class="flex justify-between">
            <div class="flex gap-4">
              <NuxtImg class="h-14" src="favicon.svg" />
              <div class="flex h-100 flex-col">
                <p class="text-primary-dark font-bold text-2xl">参加者管理ボード</p>
                <p>編集内容はOBS用のブラウザソース画面と同期されます</p>
              </div>
            </div>
            <AtmIconButton color="primary" variant="outlined">
              <Icon name="ic:baseline-settings" size="30" />
              <MolSettingDialog v-model="dialog" />
            </AtmIconButton>
          </div>
          <AtmTextField placeholder="ロビー識別番号を入力してください" />
          <div class="flex gap-4 w-full">
            <div class="w-1/2">
              <AtmButton color="success" variant="fill" class="w-full" icon="ic:baseline-play-circle">
                参加募集開始
              </AtmButton>
            </div>
            <div class="w-1/2">
              <AtmButton color="primary" variant="fill" class="w-full" icon="material-symbols:swords-outline">
                クエスト出発or終了
              </AtmButton>
            </div>
          </div>
        </AtmCard>
        <div class="flex gap-4">
          <AtmCard color="success" class="p-4 w-1/2 flex flex-col gap-4 h-[388px]">
            <div class="flex justify-between">
              <p class="text-success-dark font-bold text-xl">現在の参加者</p>
              <AtmIconButton color="success" variant="outlined" size="32">
                <Icon name="ic:baseline-content-copy" />
              </AtmIconButton>
            </div>
            <div class="flex flex-col gap-4">
              <MolStreamerItem :streamer="user" />
              <MolJoinerItem v-bind="user" />
              <MolEmptyViewerItem :player="3" />
              <MolEmptyViewerItem :player="4" />
            </div>
          </AtmCard>
          <AtmCard color="primary" class="p-4 w-1/2 flex flex-col gap-4 h-[388px]">
            <div class="flex justify-between">
              <p class="text-primary-dark font-bold text-xl">待機者 - 10人</p>
              <AtmIconButton color="primary" variant="outlined" size="32">
                <Icon name="ic:baseline-content-copy"/>
              </AtmIconButton>
            </div>
            <div class="flex flex-col gap-4 flex-1 min-h-0 overflow-y-auto [&>*]:shrink-0">
              <MolWaiterItem v-bind="user" />
              <MolWaiterItem v-bind="user" />
              

            </div>
          </AtmCard>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const dialog = ref(true)

const user = {
  name: "name",
  avatar: "https://nuxt.com/assets/design-kit/icon-green.svg",
  channel_id: "channel_id"
}
</script>

<style scoped>

</style>
