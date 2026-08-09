<template>
  <v-btn :class="styles" icon>
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'fill' | 'outlined'
    color?: 'primary' | 'success' | 'error'
  }>(),
  {
    variant: "fill",
    color: "primary"
  }
)
const styles = computed(() => [
  props.variant === 'fill' ? {
    "bg-gradient-primary": props.color === "primary",
    "bg-gradient-success": props.color === "success",
    "bg-gradient-error": props.color === "error"
  } : {
    "border-gradient-primary text-primary-dark": props.color === "primary",
    "border-gradient-success text-success-dark": props.color === "success",
    "border-gradient-error text-error-dark": props.color === "error"
  },
  {
    "text-white": props.variant === 'fill',
    "bg-gradient-to-r": props.variant === 'fill',
  }
])
</script>

<style scoped>

</style>