<template>
  <v-btn :class="styles" icon>
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: 'primary' | 'success' | 'error'
  variant: 'fill' | 'outlined'
}>()

const styles = computed(() => [
  {
    "gradient-primary": props.color === 'primary',
    "gradient-success": props.color === 'success',
    "gradient-error": props.color === 'error'
  },
  props.variant === 'outlined' && {
    "text-primary": props.color === 'primary',
    "text-success": props.color === 'success',
    "text-error": props.color === 'error'
  },
  {
    "text-white": props.variant === 'fill',
    "border-gradient-mode": props.variant === 'outlined',
    "bg-gradient-image": props.variant === 'fill'
  }
])
</script>

<style scoped>

</style>