<template>
  <div>
    {{ players }}
  </div>
</template>

<script setup lang="ts">
const { players, status } = useObsMemberPage()
</script>

<style scoped>

</style>