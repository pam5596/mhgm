<template>
  <div class="p-[2px] rounded-xl shadow-lg" :class="bg_gradient">
    <div class="bg-white rounded-xl p-4" :class="props.innerClass">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  color?: 'primary' | 'success' | 'error'
  innerClass?: HTMLAttributes['class']
}>()

const bg_gradient = computed(() => `bg-gradient-${props.color}`)
</script>


<style scoped>

</style>