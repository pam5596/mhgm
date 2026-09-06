<template>
  <div class="flex flex-col gap-4">
    <div>
      <AtmToHomeButton />
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
        :players-factory="player_factory"
        :is-streaming="is_recruiting"
        @on-copy-browser-source="() => onCopyMemberBrowserSource('join')"
      />
      <OrgWaitPlayerManageCard
        :players-factory="player_factory"
        @on-copy-next-browser-source="() => onCopyMemberBrowserSource('next')"
        @on-copy-wait-browser-source="() => onCopyMemberBrowserSource('wait')"
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
  onStopRecruit,
  onCopyMemberBrowserSource
} = await useManagerPage()

</script>

<style scoped>

</style>