<template>
  <NuxtLayout>
    <template #header>
      <AtmButton color="primary" variant="outlined" icon="ic:baseline-logout">
        {{ $t("pages.home.button.logout") }}
      </AtmButton>
    </template>
    <template #main>
      <AtmCard color="primary" class="p-8 gap-8 flex-col">
        <MolUserProfile v-bind="user"/>
        <AtmButton color="primary" variant="fill" size="large">
            {{ $t("pages.home.button.to_manager") }}
        </AtmButton>
      </AtmCard>
    </template>
  </NuxtLayout>
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