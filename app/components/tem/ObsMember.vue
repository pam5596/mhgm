<template>
  <OrgObsJoinMember 
    v-if="status === 'join' && member?.streamer"
    :streamer="member.streamer"
    :players="member?.join || []" 
  />
  <OrgObsWaitMember 
    v-if="status === 'wait'"
    :players="member?.wait || []" 
  />
  <OrgObsNextMember 
    v-if="status === 'next' && member?.streamer"
    :streamer="member.streamer"
    :players="member?.next || []" 
  />
</template>

<script setup lang="ts">
const { member, status } = useObsMemberPage()
</script>

<style scoped>

</style>