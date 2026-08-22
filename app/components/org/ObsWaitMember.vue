<template>
  <div class="flex justify-between p-4">
    <v-avatar
      v-for="player in players"
      :key="player.channel_id"
      class="border-gradient-primary !border-[3px]"
      size="x-large"
      :image="player.avatar"
      :badge="{
        color: '#A37F2C',
        location: 'bottom',
        bordered: true
      }"
    >
      <template #badge>
        <p class="font-bold">
          {{ $t("obs.member.badge.wait_member", { quests: player.wait_quests }) }}
        </p>
      </template>
    </v-avatar>
  </div>
</template>

<script setup lang="ts">
import type { SocketIOMemberEmit } from '~~/shared/dtos/interfaces/socker.io_member.emit.dto';

defineProps<{
  players: SocketIOMemberEmit["wait"]
}>()

</script>

<style scoped>

</style>