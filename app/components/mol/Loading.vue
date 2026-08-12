<template>
  <v-overlay
    :model-value="props.isShow"
    class="align-center justify-center z-[2999]"
    persistent
  >
    <v-progress-circular
      color="white"
      size="64"
      width="4"
      indeterminate
    />
  </v-overlay>
</template>

<script setup lang="ts">
const props = defineProps<{
  isShow: boolean
}>()
</script>

<style scoped>

</style>