<template>
  <AtmButton color="primary" variant="outlined" icon="ic:baseline-logout" @click="onLogout">
    {{ $t("components.atom.logout_button_text") }}
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