<template>
  <div class="flex flex-col gap-4">
    <div>
      <AtmBackButton>ホームへ戻る</AtmBackButton>
    </div>
    <OrgMainManageCard />
    <div class="flex gap-4">
      <OrgJoinerManageCard />
      <OrgWaiterManageCard />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: {
    name: "default",
    props: {
      headerType: "auth"
    }
  }
})

const user = {
  name: "name",
  avatar: "https://nuxt.com/assets/design-kit/icon-green.svg",
  channelId: "channel_id"
}
</script>

<style scoped>

</style>
