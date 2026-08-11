<template>
  <v-alert
    v-model="model"
    :type="props.type",
    :title="props.title"
    closable
  >
    <p>
      {{ props.detail }}
    </p>
    <code>
      {{ props.error }}
    </code>
  </v-alert>
</template>

<script setup lang="ts">
const model = defineModel<boolean>()
const props = defineProps<{
  type: "info" | "success" | "error",
  title: string,
  detail?: string,
  error?: string
}>()

</script>

<style scoped>

</style>
