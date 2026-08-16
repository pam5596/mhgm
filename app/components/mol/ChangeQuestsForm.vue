<template>
  <div class="flex justify-between items-center">
    <p class="text-primary-dark font-bold">
      {{ $t("pages.manager.setting_dialog.change_quests") }}
    </p>
    <MolCounter :min="1" v-model="model" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel<number>()
</script>

<style scoped>

</style>