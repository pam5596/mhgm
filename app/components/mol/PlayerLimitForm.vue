<template>
  <div class="flex justify-between items-center">
    <p class="text-primary-dark font-bold">
      {{ $t("components.molecure.player_limit_form_label") }}
    </p>
    <MolCounter v-model="players" :min="1" :max="3" />
  </div>
</template>

<script setup lang="ts">
const players = defineModel<number>()

</script>

<style scoped>

</style>