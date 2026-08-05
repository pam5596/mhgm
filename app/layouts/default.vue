<template>
  <div class="w-screen h-screen px-8 py-4 bg-gradient-to-b from-[#EBE5D8] to-[#FAF8F5] flex flex-col justify-between">
    <div class="flex flex-col gap-8 h-full">
      <header class="w-full flex flex-row justify-between">
        <MolLockup />
        <div class="flex flex-row items-center gap-3">
          <slot></slot>
        </div>
      </header>
      <main class="w-full h-full flex flex-col justify-center">
        <slot></slot>
      </main>
    </div>
    <footer class="w-full flex flex-col items-center gap-2 text-xs text-default-black">
      <MolCopyright :links="links" />
    </footer>
  </div>
</template>

<script setup lang="ts">
const links = [
  { label: "ui.footer.links.youtube_terms", href: "https://www.youtube.com/t/terms" },
  { label: "ui.footer.links.google_privacy", href: "https://policies.google.com/privacy" },
  { label: "ui.footer.links.github", href: "https://github.com/pam5596/mhgm" },
];
</script>

<style scoped>

</style>