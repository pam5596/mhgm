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
          {{ $t("components.organizm.obs_next_member.streamer_badge") }}
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
        color: 'white',
        location: 'bottom',
        bordered: true
      }"
    >
      <template #badge>
        <p class="font-bold max-w-16 truncate border-gradient-success rounded-full p-[2px] text-success-dark">
          {{ player.name }}
        </p>
      </template>
    </v-avatar>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  streamer: SocketIOMemberEmit["streamer"]
  players: SocketIOMemberEmit["next"]
}>()

</script>

<style scoped>

</style>