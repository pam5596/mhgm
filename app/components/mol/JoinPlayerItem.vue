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
          {{ $t("components.molecure.join_player_item.quest_count_label") }}
        </span>
        <MolCounter v-model="quests" color="success" :min="0" />
      </div>
      <AtmButton color="success" variant="fill" @click="openDialog">
        {{ $t("components.molecure.join_player_item.change_button_text") }}
      </AtmButton>
      <AtmButton color="error" variant="fill" @click="$emit('onCancel')">
        {{ $t("components.molecure.join_player_item.cancel_button_text") }}
      </AtmButton>
      <ChangePlayerDialog 
        v-model="dialog" 
        :waiters="props.waiters"
        @on-selected="(waiter) => onSelected(waiter)"
      />
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
import type { FactoryPlayer } from '~/types/factory_player';
import ChangePlayerDialog from './ChangePlayerDialog.vue';

const quests = defineModel<number>()
const props = defineProps<{
  player: FactoryPlayer
  waiters: FactoryPlayer[]
}>()
const emit = defineEmits<{
  onChange: [waiter: string],
  onCancel: [] 
}>()

const dialog = ref(false)
const openDialog = () => dialog.value = true

const onSelected = (waiter: FactoryPlayer) => {
  dialog.value = false
  emit("onChange", waiter.channel_id)
}

</script>

<style scoped>

</style>