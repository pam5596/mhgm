<template>
  <div class="flex gap-1">
    <AtmButton :color="props.color" variant="outlined" icon="ic:baseline-plus" />
    <input
      type="text"
      class="rounded-md p-1 h-9 w-10 text-center"
      :class="styles"
    />
    <AtmButton :color="props.color" variant="outlined" icon="ic:baseline-minus" />
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