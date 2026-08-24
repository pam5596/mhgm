<template>
  <div class="flex justify-between p-4">
    <v-avatar
      :key="streamer.channel_id"
      class="border-gradient-error !border-[3px]"
      size="x-large"
      :image="streamer.avatar"
      :badge="{
        color: 'red',
        location: 'bottom',
        bordered: true,
      }"
    >
      <template #badge>
        <p class="font-bold">
          {{ $t("components.organizm.obs_join_member.streamer_badge") }}
        </p>
      </template>
    </v-avatar>
    <v-avatar
      v-for="player in players"
      :key="player.channel_id"
      class="border-gradient-success !border-[3px]"
      size="x-large"
      :image="player.avatar"
      :badge="{
        color: '#0F766E',
        location: 'bottom',
        bordered: true
      }"
    >
      <template #badge>
        <p class="font-bold">
          {{ $t("components.organizm.obs_join_member.badge", { quests: player.join_quests }) }}
        </p>
      </template>
    </v-avatar>
  </div>
</template>

<script setup lang="ts">
import type { SocketIOMemberEmit } from '~~/shared/dtos/interfaces/socker.io_member.emit.dto';

defineProps<{
  streamer: SocketIOMemberEmit["streamer"]
  players: SocketIOMemberEmit["join"]
}>()

</script>

<style scoped>

</style>