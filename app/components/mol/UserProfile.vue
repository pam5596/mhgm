<template>
  <div class="flex gap-4 items-center">
    <v-skeleton-loader :loading="is_loading" type="avatar" class="*:m-0">
      <AtmIconButton color="primary" variant="outlined">
        <v-avatar :image="props.user?.avatar" size="40" />
      </AtmIconButton>
    </v-skeleton-loader>
    <v-skeleton-loader :loading="is_loading" type="heading" class="w-1/2 *:m-0">
      <p class="text-3xl font-bold">{{ props.user?.name }}</p>
    </v-skeleton-loader>
  </div>
</template>

<script setup lang="ts">
import type { User } from '#auth-utils';

const props = defineProps<{
  user: User | null
}>()

const is_loading = computed(() => !props.user)

</script>

<style scoped>

</style>