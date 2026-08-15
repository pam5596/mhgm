<template>
  <AtmCard color="primary" class="p-8 gap-8">
    <div class="w-1/2 flex flex-col gap-8 justify-center">
      <OrgAppTitle />
      <OrgAppDescription />
      <div class="flex gap-4">
        <AtmLoginButton />
        <AtmAboutButton />
      </div>
    </div>
    <div class="w-1/2 flex justify-center">
      <AtmFavicon class="size-full max-w-xl" />
    </div>
  </AtmCard>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>