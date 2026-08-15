<template>
  <div class="flex flex-col gap-4">
    <div>
      <AtmBackButton>
        {{ $t("pages.manager.button.to_home") }}
      </AtmBackButton>
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
</script>

<style scoped>

</style>
