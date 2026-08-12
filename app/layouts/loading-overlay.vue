<template>
  <div>
    <MolLoading :is-show="is_show_loading" />
    <slot />
  </div>
</template>

<script setup lang="ts">
const { is_show_loading } = useLoading()

</script>

<style scoped>

</style>