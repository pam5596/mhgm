<template>
  <v-dialog v-model="dialog">
    <div class="w-full flex justify-center">
      <AtmCard class="p-4 flex-col gap-4 w-1/2 max-h-[640px] overflow-y-scroll">
        <div class="flex justify-between">
          <p class="text-primary-dark font-bold text-xl">
            {{ $t("components.molecure.setting_dialog.title") }}
          </p>
          <Icon class="text-primary-dark cursor-pointer" name="ic:baseline-close" size="28" @click="closeDialog"/>
        </div>
        <v-divider thickness="2" class="border-primary border-opacity-100" />
        <div class="flex gap-4 flex-col">
          <MolQuestLimitForm v-model="quest_limit" />
          <MolPlayerLimitForm v-model="player_limit" />
          <MolEntryKeywordForm v-model="entry_keywords" />
          <MolCancelKeywordForm v-model="cancel_keywords" />
          <MolEventMessageForm v-model="settings.event_message" />
        </div>
      </AtmCard>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
const { settings, patchSettings, patchEventMessages } = usePublicAPI()

const dialog = defineModel<boolean>("dialog")
const closeDialog = async () => {
  dialog.value = false
  await patchSettings()
  await patchEventMessages()
}
const quest_limit = computed({
  get: () => settings.value.setting.quest_limit,
  set: (value: number) => {
    settings.value = { 
      ...settings.value, 
      setting: { 
        ...settings.value.setting, 
        quest_limit: value 
      }
    }
  }
})

const player_limit = computed({
  get: () => settings.value.setting.player_limit,
  set: (value: number) => {
    settings.value = { 
      ...settings.value, 
      setting: { 
        ...settings.value.setting, 
        player_limit: value 
      }
    }
  }
})

const entry_keywords = computed({
  get: () => settings.value.keywords.filter(keyword => keyword.action === ActionEnum.entry),
  set: (value: AuthPublicUsersSettingsGETResponse["body"]["keywords"]) => {
    const ignored_entry = settings.value.keywords.filter(k => k.action !== ActionEnum.entry)
    settings.value = { ...settings.value, keywords: [ ...ignored_entry, ...value]}
  }
})

const cancel_keywords = computed({
  get: () => settings.value.keywords.filter(keyword => keyword.action === ActionEnum.cancel),
  set: (value: AuthPublicUsersSettingsGETResponse["body"]["keywords"]) => {
    const ignored_entry = settings.value.keywords.filter(k => k.action !== ActionEnum.cancel)
    settings.value = { ...settings.value, keywords: [ ...ignored_entry, ...value]}
  }
})

</script>

<style scoped>

</style>