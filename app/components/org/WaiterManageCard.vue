<template>
  <AtmCard color="primary" class="p-4 w-1/2 flex flex-col gap-4 h-[388px]">
    <div class="flex justify-between">
      <p class="text-primary-dark font-bold text-xl">
        {{ $t("pages.manager.waiter_manage_card.title", { count: 10 }) }}
      </p>
      <AtmIconButton color="primary" variant="outlined" size="32">
        <Icon name="ic:baseline-content-copy"/>
      </AtmIconButton>
    </div>
    <div class="flex flex-col gap-4 flex-1 min-h-0 overflow-y-auto [&>*]:shrink-0">
      <MolWaiterItem v-bind="user" />
      <MolWaiterItem v-bind="user" />
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