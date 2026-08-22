<template>
  <div class="flex justify-between items-center">
    <p class="text-primary-dark font-bold">
      {{ $t("pages.manager.setting_dialog.change_quests") }}
    </p>
    <MolCounter v-model="quests" :min="1" />
  </div>
</template>

<script setup lang="ts">
const quests = defineModel<number>()
</script>

<style scoped>

</style>