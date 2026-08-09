<template>
  <AtmCard :color="color" class="flex justify-between px-4 py-1 gap-2 h-16">
    <div class="flex gap-2 items-center">
      <AtmIconButton :color="color" variant="outlined">
        <v-avatar :image="props.streamer.avatar" />
      </AtmIconButton>
      <p class=" font-bold max-w-56 line-clamp-2">
        {{ props.streamer.name }}
      </p>
    </div>
    <div v-if="props.isStreaming" class="flex gap-2 items-center text-error-dark">
      <Icon name="ic:baseline-fiber-manual-record" />
      <p class="font-bold">
        配信中
      </p>
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  isStreaming?: boolean
  streamer: {
    name: string
    channel_id: string
    avatar: string
  }
}>()

const color = computed(() => props.isStreaming ? "error" : "success")

</script>

<style scoped>

</style>