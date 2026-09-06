<template>
  <div class="flex justify-between items-center">
    <p class="text-primary-dark font-bold">
      {{ $t("components.molecure.quest_limit_form_label") }}
    </p>
    <MolCounter v-model="quests" :min="1" />
  </div>
</template>

<script setup lang="ts">
const quests = defineModel<number>()
</script>

<style scoped>

</style>