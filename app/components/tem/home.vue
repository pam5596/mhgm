<template>
  <AtmCard color="primary" class="p-8 gap-8 flex-col">
    <MolUserProfile
      :user="user"
    />
    <AtmToManagerButton />
  </AtmCard>
</template>

<script setup lang="ts">
const { user } = useHomePage()

</script>

<style scoped>

</style>