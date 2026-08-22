<template>
  <TemHome />
</template>

<script setup lang="ts">
definePageMeta({
  layout: {
    name: "auth",
  },
  middleware: "auth"
})
</script>

<style scoped>

</style>