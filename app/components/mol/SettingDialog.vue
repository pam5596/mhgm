<template>
  <v-dialog v-model="dialog" class="text-center">
    <div class="w-full flex justify-center">
      <AtmCard class="p-4 flex-col gap-2 w-1/2">
        <p class="text-primary-dark font-bold text-xl">
          {{ $t("pages.manager.setting_dialog.title") }}
        </p>
        <v-divider thickness="2" class="border-primary border-opacity-100" />
        <div class="flex gap-2 flex-col">
          <MolChangeQuestsForm v-model="change_quests" />
          <MolEntryKeywordForm />
          <MolCancelKeywordForm />
        </div>
      </AtmCard>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import type { AuthPublicUsersSettingsGETResponse } from '~~/shared/dtos/interfaces/auth_public_users_settings.get.res.dto';

const dialog = defineModel<boolean>("dialog")
const settings = defineModel<AuthPublicUsersSettingsGETResponse["body"]>("settings", { required: true })

const change_quests = computed({
  get: () => settings.value.setting.quest_limit,
  set: (value: number) => {
    settings.value = { ...settings.value, setting: { quest_limit: value }}
  }
})

</script>

<style scoped>

</style>