<template>
  <div class="flex justify-between p-4">
    <v-avatar
      class="border-gradient-error !border-[3px]"
      size="x-large"
      :key="streamer.channel_id"
      :image="streamer.avatar"
      :badge="{
        color: 'red',
        location: 'bottom',
        bordered: true,
      }"
    >
      <template v-slot:badge>
        <p class="font-bold">
          {{ $t("obs.member.badge.streamer") }}
        </p>
      </template>
    </v-avatar>
    <v-avatar
      v-for="player in players"
      class="border-gradient-success !border-[3px]"
      size="x-large"
      :key="player.channel_id"
      :image="player.avatar"
      :badge="{
        color: 'white',
        location: 'bottom',
        bordered: true
      }"
    >
      <template v-slot:badge>
        <p class="font-bold max-w-16 truncate border-gradient-success rounded-full p-[2px] text-success-dark">
          {{ player.name }}
        </p>
      </template>
    </v-avatar>
  </div>
</template>

<script setup lang="ts">
import type { SocketIOMemberEmit } from '~~/shared/dtos/interfaces/socker.io_member.emit.dto';

const props = defineProps<{
  streamer: SocketIOMemberEmit["streamer"]
  players: SocketIOMemberEmit["next"]
}>()

</script>

<style scoped>

</style>