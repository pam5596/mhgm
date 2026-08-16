<template>
  <div class="flex justify-between items-center">
    <p class="text-primary-dark font-bold">
      {{ $t("pages.manager.setting_dialog.entry_keywords") }}
    </p>
    <AtmButton>
      {{ $t("pages.manager.setting_dialog.button.add_keyword") }}
    </AtmButton>
  </div>
  <div class="flex flex-col gap-2">
    <MolKeywordField />
    <MolKeywordField />
    <MolKeywordField />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>