<template>
  <AtmCard color="primary" class="p-4 flex-col gap-4">
    <div class="flex justify-between">
      <div class="flex gap-4">
        <AtmFavicon class="h-14" />
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
</template>

<script setup lang="ts">
const dialog = ref(false)

</script>

<style scoped>

</style>