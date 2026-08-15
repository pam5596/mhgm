<template>
  <AtmCard color="primary" class="p-4 flex-col gap-4">
    <div class="flex justify-between">
      <div class="flex gap-4">
        <AtmFavicon class="h-14" />
        <div class="flex h-100 flex-col">
          <p class="text-primary-dark font-bold text-2xl">
            {{ $t("pages.manager.main_manage_card.title") }}
          </p>
          <p>
            {{ $t("pages.manager.main_manage_card.description") }}
          </p>
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
          {{ $t("pages.manager.button.start_recruit") }}
        </AtmButton>
      </div>
      <div class="w-1/2">
        <AtmButton color="primary" variant="fill" class="w-full" icon="material-symbols:swords-outline">
          {{ $t("pages.manager.button.increase_quest") }}
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