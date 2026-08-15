<template>
  <AtmCard color="success" class="p-4 w-1/2 flex flex-col gap-4 h-[388px]">
    <div class="flex justify-between">
      <p class="text-success-dark font-bold text-xl">現在の参加者</p>
      <AtmIconButton color="success" variant="outlined" size="32">
        <Icon name="ic:baseline-content-copy" />
      </AtmIconButton>
    </div>
    <div class="flex flex-col gap-4">
      <MolStreamerItem :streamer="user" />
      <MolJoinerItem v-bind="user" />
      <MolEmptyViewerItem :player="3" />
      <MolEmptyViewerItem :player="4" />
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
const user = {
  name: "name",
  avatar: "https://nuxt.com/assets/design-kit/icon-green.svg",
  channelId: "channel_id"
}

</script>

<style scoped>

</style>