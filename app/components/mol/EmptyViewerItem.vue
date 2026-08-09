<template>
  <div class="flex items-center px-4 py-1 border-2 border-success border-dashed rounded-xl shadow-lg h-16">
    <p class="font-bold line-clamp-2 text-success-dark">
      プレイヤー{{ props.player }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  player: number
}>()

</script>

<style scoped>

</style>