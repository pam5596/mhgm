<template>
  <div class="flex flex-col">
    <input
      type="text"
      class="rounded-md p-2"
      :class="styles"
      :placeholder="props.placeholder"
      v-model="model"
    />
    <span v-if="props.error" class="text-error-dark">
      {{ props.error }}
    </span>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>()

const props = withDefaults(
  defineProps<{
    color?: 'primary' | 'success' | 'error',
    placeholder?: string
    error?: string
  }>(),
  {
    color: "primary"
  }
)

const styles = computed(() => ([
  {
    "border-gradient-primary": props.color === "primary",
    "border-gradient-success": props.color === "success",
    "border-gradient-error": props.color === "error"
  },
  {
    "gradient-error": props.error
  }
]))

</script>

<style scoped>

</style>