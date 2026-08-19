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
  channel_id: "channel_id"
}

</script>

<style scoped>

</style>