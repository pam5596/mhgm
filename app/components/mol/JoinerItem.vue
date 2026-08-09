<template>
  <AtmCard color="success" class="flex justify-between px-4 py-1 gap-2 h-16">
    <div class="flex gap-2 items-center">
      <AtmIconButton color="success" variant="outlined">
        <v-avatar :image="props.avatar" />
      </AtmIconButton>
      <p class=" font-bold max-w-56 line-clamp-2">
        {{ props.name }}
      </p>
    </div>
    <div class="flex items-center gap-2">
      <div class="flex flex-col items-center">
        <span class="text-success-dark font-bold text-xs">参加クエスト数</span>
        <MolCounter v-model="model" color="success" />
      </div>
      <AtmButton color="success" variant="fill">
        交代
      </AtmButton>
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