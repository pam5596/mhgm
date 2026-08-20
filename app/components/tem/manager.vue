<template>
  <div class="flex flex-col gap-4">
    <div>
      <AtmBackButton href="/home">
        {{ $t("pages.manager.button.to_home") }}
      </AtmBackButton>
    </div>
    <OrgMainManageCard 
      :is-recruiting="is_recruiting"
      @on-start-recruit="onStartRecruit"
      @on-stop-recruit="onStopRecruit"
      @on-increace-quest="() => player_factory?.increaceQuests()"
    />
    <div class="flex gap-4">
      <OrgJoinPlayerManageCard
        :streamer="user"
        :players_factory="player_factory"
        :is-streaming="is_recruiting"
      />
      <OrgWaitPlayerManageCard
        :players_factory="player_factory"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { 
  user, 
  is_recruiting,
  player_factory,
  onStartRecruit,
  onStopRecruit
} = await useManagerPage()

</script>

<style scoped>

</style>