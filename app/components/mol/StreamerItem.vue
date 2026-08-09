<template>
  <AtmCard color="error" class="flex justify-between px-4 py-1 gap-2 h-16">
    <div class="flex gap-2 items-center">
      <AtmIconButton color="error" variant="outlined">
        <v-avatar :image="props.avatar" />
      </AtmIconButton>
      <p class="text-default font-bold max-w-56 line-clamp-2">
        {{ props.name }}
      </p>
    </div>
    <div class="flex gap-2 items-center">
      <Icon name="ic:baseline-fiber-manual-record" class="text-error" />
      <p class="text-error font-bold">
        配信中
      </p>
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  channel_id: string
  avatar: string
}>()

</script>

<style scoped>

</style>