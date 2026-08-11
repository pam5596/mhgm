<template>
  <div class="w-screen h-screen bg-gradient-to-b from-[#EBE5D8] to-[#FAF8F5] *:text-default">
    <div class="w-full h-full flex justify-center">
      <div class="px-8 py-4 w-full max-w-screen-xl flex flex-col gap-8">
        <div class="flex flex-col gap-8 h-full">
          <header class="w-full flex flex-row justify-between">
            <MolLockup />
            <div class="flex flex-row items-center gap-3">
              <slot name="header" />
            </div>
          </header>
          <main class="w-full h-full flex flex-col justify-center">
            <slot name="main" />
          </main>
        </div>
        <footer class="w-full flex flex-col items-center gap-2 text-xs">
          <MolCopyright  />
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>