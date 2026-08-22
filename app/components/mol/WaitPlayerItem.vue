<template>
  <AtmCard color="primary" class="flex justify-between px-4 py-1 gap-2 h-16">
    <div class="flex gap-2 items-center">
      <AtmIconButton color="primary" variant="outlined">
        <v-avatar :image="props.player.avatar" />
      </AtmIconButton>
      <p class=" font-bold max-w-56 line-clamp-2">
        {{ props.player.name }}
      </p>
    </div>
    <div class="flex items-center gap-2">
      <div class="flex flex-col items-center">
        <span class="text-primary-dark font-bold text-xs">
          {{ $t("pages.manager.waiter_manage_card.item.quest_count") }}
        </span>
        <MolCounter v-model="quests" :min="0" />
      </div>
      <AtmButton color="error" variant="fill" @click="$emit('onCancel')">
        {{ $t("pages.manager.waiter_manage_card.item.cancel") }}
      </AtmButton>
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
import type { FactoryPlayer } from '~/types/factory_player';

const quests = defineModel<number>()
const props = defineProps<{
  player: FactoryPlayer
}>()
defineEmits<{
  onCancel: [] 
}>()

</script>

<style scoped>

</style>