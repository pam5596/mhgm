<template>
  <v-btn 
    class="font-bold p-2 min-w-px"
    :class="styles"
    variant="outlined"
  >
    <div class="flex items-center gap-2">
      <Icon v-if="props.icon" :name="props.icon" class="size-5" />
      <span v-if="$slots.default">
        <slot />
      </span>
    </div>
  </v-btn>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'fill' | 'outlined'
    color?: 'primary' | 'success' | 'error'
    icon?: string
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