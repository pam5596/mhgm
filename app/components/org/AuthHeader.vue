<template>
  <AtmButton color="primary" variant="outlined" icon="ic:baseline-logout" @click="onLogout">
    {{ $t("layouts.default.button.logout") }}
  </AtmButton>
</template>

<script setup lang="ts">
const { clear } = useUserSession()

const onLogout = async () => {
  await clear()
  navigateTo("/")
}

</script>

<style scoped>

</style>