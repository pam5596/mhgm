<template>
  <div class="flex justify-between gap-2">
    <AtmTextField v-model="keyword" class="w-full" />
    <AtmButton color="success" @click="$emit('onUpdate')">
      {{ $t("components.molecure.keyword_field.edit_button_text") }}
    </AtmButton>
    <AtmButton color="error" @click="$emit('onDelete')">
      {{ $t("components.molecure.keyword_field.delete_button_text") }}
    </AtmButton>
  </div>
</template>

<script setup lang="ts">
const keyword = defineModel<string>()
defineEmits<{
  onUpdate: [],
  onDelete: []
}>()


</script>

<style scoped>

</style>