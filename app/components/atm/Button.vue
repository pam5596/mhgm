<template>
  <v-btn 
    v-bind="$attrs"
    class="font-bold p-2 min-w-px"
    :class="styles"
    variant="outlined"
  >
    <div class="flex items-center">
      <Icon v-if="props.icon" :name="props.icon" class="size-5" />
      <span v-if="$slots.default">
        <slot />
      </span>
    </div>
  </v-btn>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })
const props = defineProps<{
  color: 'primary' | 'success' | 'error'
  variant: 'fill' | 'outlined'
  icon?: string
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