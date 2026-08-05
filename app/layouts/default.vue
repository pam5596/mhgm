<template>
  <div class="w-screen h-screen px-8 py-4 bg-gradient-to-b from-[#EBE5D8] to-[#FAF8F5] flex flex-col justify-between">
    <div class="flex flex-col gap-8 h-full">
      <header class="w-full flex flex-row justify-between">
        <div class="flex flex-row items-center gap-2">
          <NuxtImg class="size-12" src="favicon.svg" />
          <p class="text-4xl font-cinzel bg-gradient-primary text-gradient-mode font-bold">
            {{  $t("ui.header.app_title") }}
          </p>
        </div>
        <div class="flex flex-row items-center gap-3">
          <slot></slot>
        </div>
      </header>
      <main class="w-full h-full flex flex-col justify-center">
        <div class="p-[2px] bg-gradient-primary rounded-xl shadow-lg">
          <div class="bg-white rounded-xl p-4">
            <slot></slot>
          </div>
        </div>
      </main>
    </div>
    <footer class="w-full flex flex-col items-center gap-2 text-xs text-default-black">
      <nav class="flex flex-row items-center gap-3">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline"
        >
          {{ $t(link.label) }}
        </a>
      </nav>
      <p class="max-w-3xl text-center">
        {{ $t("ui.footer.disclaimer") }}
      </p>
      <copy>
        {{ $t("ui.footer.capcom") }} / {{ $t("ui.footer.copyright") }}
      </copy>
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