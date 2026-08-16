<template>
  <div class="flex gap-4 items-center">
    <v-skeleton-loader :loading="is_loading" type="avatar" class="*:m-0">
      <AtmIconButton color="primary" variant="outlined">
        <v-avatar :image="props.avatar" size="40" />
      </AtmIconButton>
    </v-skeleton-loader>
    <v-skeleton-loader :loading="is_loading" type="heading" class="w-1/2 *:m-0">
      <p class="text-3xl font-bold">{{ props.name }}</p>
    </v-skeleton-loader>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name?: string
  avatar?: string
  channelId?: string
}>()

const is_loading = computed(() => !(props.name && props.avatar && props.channelId))

</script>

<style scoped>

</style>