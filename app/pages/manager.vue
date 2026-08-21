<template>
  <TemManager />
</template>

<script setup lang="ts">
definePageMeta({
  layout: {
    name: "default",
    props: {
      headerType: "auth"
    }
  },
  middleware: "auth"
})
</script>

<style scoped>

</style>
