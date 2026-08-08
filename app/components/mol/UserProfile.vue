<template>
  <div class="flex gap-4">
    <v-skeleton-loader :loading="is_loading" type="avatar" class="*:m-0">
      <v-btn icon class="gradient-primary border-gradient-mode">
        <v-avatar :image="props.avatar" :size="40"></v-avatar>
      </v-btn>
    </v-skeleton-loader>
    <v-skeleton-loader :loading="is_loading" type="heading" class="w-1/2 *:m-0">
      <p class="text-default text-4xl">{{ props.name }}</p>
    </v-skeleton-loader>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name?: string
  avatar?: string
  channel_id?: string
}>()

const is_loading = computed(() => !(props.name && props.avatar && props.channel_id))

</script>

<style scoped>

</style>