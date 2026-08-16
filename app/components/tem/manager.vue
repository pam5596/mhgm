<template>
  <div class="flex flex-col gap-4">
    <div>
      <AtmBackButton href="/home">
        {{ $t("pages.manager.button.to_home") }}
      </AtmBackButton>
    </div>
    <OrgMainManageCard 
      v-model:settings="settings"
      :is-recruiting="is_recruiting"
      @on-start-recruit="onStartRecruit"
      @on-stop-recruit="onStopRecruit"
    />
    <div class="flex gap-4">
      <OrgJoinerManageCard />
      <OrgWaiterManageCard />
    </div>
  </div>
</template>

<script setup lang="ts">
const { 
  user, 
  settings, 
  is_recruiting,
  onStartRecruit,
  onStopRecruit
} = await useManagerPage()

</script>

<style scoped>

</style>