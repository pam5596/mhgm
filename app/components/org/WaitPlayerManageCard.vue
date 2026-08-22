<template>
  <AtmCard color="primary" class="p-4 w-1/2 flex flex-col gap-4 h-[388px]">
    <div class="flex justify-between">
      <p class="text-primary-dark font-bold text-xl">
        {{ $t("pages.manager.waiter_manage_card.title", { count: 10 }) }}
      </p>
      <div class="flex gap-2">
        <v-tooltip 
          :text="$t('pages.manager.waiter_manage_card.tooltip.copy_next_browser_source')"
          location="start"
        >
          <template #activator="{ props: activator_props }">
            <AtmIconButton 
              color="primary" 
              variant="fill" 
              size="32"
              v-bind="activator_props"
              @click="$emit('onCopyNextBrowserSource')"
            >
              <Icon name="ic:baseline-content-copy"/>
            </AtmIconButton>
          </template>
        </v-tooltip>
        <v-tooltip 
          :text="$t('pages.manager.waiter_manage_card.tooltip.copy_wait_browser_source')"
          location="start"
        >
          <template #activator="{ props: activator_props }">
            <AtmIconButton 
              color="primary" 
              variant="outlined" 
              size="32"
              v-bind="activator_props"
              @click="$emit('onCopyWaitBrowserSource')"
            >
              <Icon name="ic:baseline-content-copy"/>
            </AtmIconButton>
          </template>
        </v-tooltip>
      </div>
    </div>
    <div class="flex flex-col gap-4 flex-1 min-h-0 overflow-y-auto [&>*]:shrink-0">
      <template v-for="player in waiter_players">
        <MolWaitPlayerItem
          v-if="player"
          :key="player.channel_id"
          v-model="waiter_quests(player).value"
          :player="player"
          @on-cancel="() => onCancel(player.channel_id)"
        />
      </template>
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
import type { FactoryPlayer } from '~/types/factory_player';

const props = defineProps<{
  playersFactory?: PlayerFactory
}>()

defineEmits<{
  onCopyWaitBrowserSource: []
  onCopyNextBrowserSource: []
}>()

const waiter_players = computed(
  () => props.playersFactory?.waiters
)

const waiter_quests = (player: FactoryPlayer) => computed({
  get: () => player.wait_quests,
  set: (value) => {
    props.playersFactory?.changePlayerQuests(player.channel_id, value)
  }
})

const onCancel = (channel_id: string) => 
  props.playersFactory?.cancelPlayer(channel_id)

</script>

<style scoped>

</style>