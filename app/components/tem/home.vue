<template>
  <AtmCard color="primary" class="p-8 gap-8 flex-col">
    <MolUserProfile
      :avatar="user?.avatar"
      :channel-id="user?.channel_id"
      :name="user?.name"
    />
    <AtmButton color="primary" variant="fill" size="large" href="/manager">
        {{ $t("pages.home.button.to_manager") }}
    </AtmButton>
  </AtmCard>
</template>

<script setup lang="ts">
const { user } = useHomePage()

</script>

<style scoped>

</style>