<template>
  <div class="flex justify-between gap-2">
    <AtmTextField v-model="model" class="w-full" />
    <AtmButton color="success" @click="$emit('onUpdate')">
      {{ $t("pages.manager.setting_dialog.button.edit_keyword") }}
    </AtmButton>
    <AtmButton color="error" @click="$emit('onDelete')">
      {{ $t("pages.manager.setting_dialog.button.delete_keyword") }}
    </AtmButton>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>()
const emit = defineEmits<{
  onUpdate: [],
  onDelete: []
}>()


</script>

<style scoped>

</style>