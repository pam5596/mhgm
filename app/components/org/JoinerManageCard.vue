<template>
  <AtmCard color="success" class="p-4 w-1/2 flex flex-col gap-4 h-[388px]">
    <div class="flex justify-between">
      <p class="text-success-dark font-bold text-xl">
        {{ $t("pages.manager.joiner_manage_card.title") }}
      </p>
      <AtmIconButton color="success" variant="outlined" size="32">
        <Icon name="ic:baseline-content-copy" />
      </AtmIconButton>
    </div>
    <div class="flex flex-col gap-4">
      <MolStreamerItem :streamer="props.streamer" :is-streaming="props.isStreaming"/>
      <template v-for="(player, index) in joiner_players">
        <MolJoinerItem 
          v-if="player"
          :player="player"
          v-model="joiner_quests(player).value"
        />
        <MolEmptyViewerItem v-else :player="index+2" />
      </template>
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
import type { DisplayUser } from '~/types/display_user';
import type { FactoryPlayer } from '~/types/factory_player';

const props = defineProps<{
  isStreaming?: boolean
  streamer: DisplayUser
  players_factory: PlayerFactory
}>()

const joiner_players = computed(
  () => Array.from({ length: 3 }, (_, i) => props.players_factory.joiners[i] ?? null)
)

const joiner_quests = (player: FactoryPlayer) => computed({
  get: () => player.join_quests,
  set: (value) => {
    props.players_factory.changePlayerQuests(player.channel_id, value)
  }
})

</script>

<style scoped>

</style>