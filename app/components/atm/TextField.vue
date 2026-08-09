<template>
  <div class="flex flex-col">
    <input
      type="text"
      class="gradient-primary border-gradient-mode rounded-md p-2"
      :class="styles"
      :placeholder="props.placeholder"
      v-model="model"
    />
    <span v-if="props.error" class="text-error">
      {{ props.error }}
    </span>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>()

const props = defineProps<{
  placeholder?: string
  error?: string
}>()

const styles = computed(() => ([
  {
    "gradient-error": props.error
  }
]))

</script>

<style scoped>

</style>