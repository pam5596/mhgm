<template>
  <div>
    <div class="fixed z-[3000] flex justify-center w-screen">
        <div class="px-8 py-4 w-full max-w-screen-xl flex flex-col gap-8">
          <MolAlert 
            v-model="is_show_alert"
            v-bind="alert_content" 
          />
        </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const { is_show_alert, alert_content } = useAlert()

</script>

<style scoped>

</style>