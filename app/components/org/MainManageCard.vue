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
      <AtmIconButton 
        color="primary" 
        variant="outlined" 
        :disabled="props.isRecruiting"
        @click="openDialog" 
      >
        <Icon name="ic:baseline-settings" size="30" />
        <MolSettingDialog 
          v-model:dialog="dialog"
        />
      </AtmIconButton>
    </div>
    <div class="flex gap-4 w-full">
      <div class="w-1/2">
        <AtmButton v-if="!props.isRecruiting" color="success" variant="fill" class="w-full" icon="ic:baseline-play-circle" @click="$emit('onStartRecruit')">
          {{ $t("pages.manager.button.start_recruit") }}
        </AtmButton>
        <AtmButton v-if="props.isRecruiting" color="error" variant="fill" class="w-full" icon="ic:baseline-stop-circle" @click="$emit('onStopRecruit')">
          {{ $t("pages.manager.button.stop_recruit") }}
        </AtmButton>
      </div>
      <div class="w-1/2">
        <AtmButton color="primary" variant="fill" class="w-full" icon="material-symbols:swords-outline" @click="$emit('onIncreaceQuest')">
          {{ $t("pages.manager.button.increase_quest") }}
        </AtmButton>
      </div>
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
const dialog = ref(false)
const openDialog = () => dialog.value = true

const props = defineProps<{
  isRecruiting: boolean
}>()

defineEmits<{
  onStartRecruit: []
  onStopRecruit: [],
  onIncreaceQuest: []
}>()

</script>

<style scoped>

</style>