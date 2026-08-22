<template>
  <AtmCard :color="color" class="flex justify-between px-4 py-1 gap-2 h-16">
    <div class="flex gap-2 items-center">
      <v-skeleton-loader :loading="is_loading" type="avatar" class="*:m-0">
        <AtmIconButton :color="color" variant="outlined">
          <v-avatar :image="props.streamer?.avatar" />
        </AtmIconButton>
      </v-skeleton-loader>
      <v-skeleton-loader :loading="is_loading" type="heading" class="w-1/2 *:m-0">
        <p class=" font-bold max-w-56 line-clamp-2">
          {{ props.streamer?.name }}
        </p>
      </v-skeleton-loader>
    </div>
    <div v-if="props.isStreaming" class="flex gap-2 items-center text-error-dark">
      <Icon name="ic:baseline-fiber-manual-record" />
      <p class="font-bold">
        {{ $t("pages.manager.joiner_manage_card.item.straming") }}
      </p>
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
import type { DisplayUser } from '~/types/display_user';

const props = defineProps<{
  isStreaming?: boolean
  streamer: DisplayUser | null
}>()

const color = computed(() => props.isStreaming ? "error" : "success")
const is_loading = computed(() => !props.streamer)

</script>

<style scoped>

</style>