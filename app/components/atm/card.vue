<template>
  <div :class="styles" class="bg-white border-gradient-mode rounded-xl shadow-lg flex">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  color: 'primary' | 'success' | 'error'
  innerClass?: HTMLAttributes['class']
}>()

const styles = computed(() => (
  {
    "gradient-primary": props.color === 'primary',
    "gradient-success": props.color === 'success',
    "gradient-error": props.color === 'error',
  }
))

</script>


<style scoped>

</style>