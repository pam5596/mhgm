<template>
  <v-alert
    v-model="alert"
    :type="props.type"
    :title="props.title"
    closable
  >
    <p>
      {{ props.detail }}
    </p>
    <code class="whitespace-pre-wrap text-xs">
      {{ props.error }}
    </code>
  </v-alert>
</template>

<script setup lang="ts">
const alert = defineModel<boolean>()
const props = defineProps<{
  type: "info" | "success" | "error",
  title: string,
  detail?: string,
  error?: string
}>()

</script>

<style scoped>

</style>
