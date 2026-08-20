<template>
  <AtmCard color="success" class="flex justify-between px-4 py-1 gap-2 h-16">
    <div class="flex gap-2 items-center">
      <AtmIconButton color="success" variant="outlined">
        <v-avatar :image="props.player.avatar" />
      </AtmIconButton>
      <p class=" font-bold max-w-56 line-clamp-2">
        {{ props.player.name }}
      </p>
    </div>
    <div class="flex items-center gap-2">
      <div class="flex flex-col items-center">
        <span class="text-success-dark font-bold text-xs">
          {{ $t("pages.manager.joiner_manage_card.item.quest_count") }}
        </span>
        <MolCounter v-model="model" color="success" />
      </div>
      <AtmButton color="success" variant="fill">
        {{ $t("pages.manager.joiner_manage_card.item.change") }}
      </AtmButton>
      <AtmButton color="error" variant="fill">
        {{ $t("pages.manager.joiner_manage_card.item.leave") }}
      </AtmButton>
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
import type { FactoryPlayer } from '~/types/factory_player';

const model = defineModel<number>()
const props = defineProps<{
  player: FactoryPlayer
}>()

</script>

<style scoped>

</style>