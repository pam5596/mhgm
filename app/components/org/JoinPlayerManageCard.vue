<template>
  <AtmCard color="success" class="p-4 w-1/2 flex flex-col gap-4 h-[388px]">
    <div class="flex justify-between">
      <p class="text-success-dark font-bold text-xl">
        {{ $t("pages.manager.joiner_manage_card.title") }}
      </p>
      <v-tooltip 
        :text="$t('pages.manager.joiner_manage_card.tooltip.copy_join_browser_source')"
        location="start"
      >
        <template #activator="{ props }">
          <AtmIconButton 
            color="success" 
            variant="outlined" 
            size="32"
            v-bind="props"
            @click="$emit('onCopyBrowserSource')"
          >
            <Icon name="ic:baseline-content-copy" />
          </AtmIconButton>
        </template>
      </v-tooltip>
    </div>
    <div class="flex flex-col gap-4">
      <MolStreamerItem :streamer="props.streamer" :is-streaming="props.isStreaming"/>
      <template v-for="(player, index) in joiners">
        <MolJoinPlayerItem 
          v-if="player"
          :key="player.channel_id"
          v-model="joiner_quests(player).value"
          :player="player"
          :waiters="waiters"
          @on-change="(waiter) => onChange(player.channel_id, waiter)"
          @on-cancel="() => onCancel(player.channel_id)"
        />
        <MolEmptyPlayerItem v-else :key="index" :player="index+2" />
      </template>
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
import type { DisplayUser } from '~/types/display_user';
import type { FactoryPlayer } from '~/types/factory_player';

const props = defineProps<{
  isStreaming?: boolean
  streamer: DisplayUser | null
  playersFactory?: PlayerFactory
}>()

defineEmits<{
  onCopyBrowserSource: []
}>()

const joiners = computed(
  () => Array.from(
    { length: 3 }, 
    (_, i) => props.playersFactory?.joiners[i] ?? null
  )
)

const waiters = computed(
  () => props.playersFactory?.waiters || []
)

const joiner_quests = (player: FactoryPlayer) => computed({
  get: () => player.join_quests,
  set: (value) => {
    props.playersFactory?.changePlayerQuests(player.channel_id, value)
  }
})

const onChange = (joiner: string, waiter: string) => 
  props.playersFactory?.changePlayer(
    joiner, waiter
  )

const onCancel = (channel_id: string) => 
  props.playersFactory?.cancelPlayer(channel_id)
</script>

<style scoped>

</style>