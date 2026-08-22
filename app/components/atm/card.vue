<template>
  <div :class="styles" class="bg-white rounded-xl shadow-lg flex">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color?: 'primary' | 'success' | 'error'
  }>(),
  {
    color: "primary"
  }
)
const styles = computed(() => [
  {
    "border-gradient-primary": props.color === "primary",
    "border-gradient-success": props.color === "success",
    "border-gradient-error": props.color === "error"
  }
])
</script>


<style scoped>

</style>