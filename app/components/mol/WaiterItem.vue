<template>
  <AtmCard color="primary" class="flex justify-between px-4 py-1 gap-2 h-16">
    <div class="flex gap-2 items-center">
      <AtmIconButton color="primary" variant="outlined">
        <v-avatar :image="props.avatar" />
      </AtmIconButton>
      <p class="text-default font-bold max-w-56 line-clamp-2">
        {{ props.name }}
      </p>
    </div>
    <div class="flex items-center gap-2">
      <div class="flex flex-col items-center">
        <span class="text-primary font-bold text-xs">待機クエスト数</span>
        <MolCounter v-model="model" />
      </div>
      <AtmButton color="error" variant="fill">
        退出
      </AtmButton>
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
const model = defineModel<number>()
const props = defineProps<{
  name: string
  channel_id: string
  avatar: string
}>()

</script>

<style scoped>

</style>