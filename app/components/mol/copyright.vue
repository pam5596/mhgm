<template>
  <nav class="flex flex-row items-center gap-3">
    <a
      v-for="(link, index) in props.links"
      :key="index"
      :href="link.href"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:underline"
    >
      {{ $t(link.label) }}
    </a>
  </nav>
  <p class="max-w-3xl text-center">
    {{ $t("layouts.default.disclaimer") }}
  </p>
  <p>
    {{ $t("layouts.default.capcom") }} / {{ $t("layouts.default.copyright") }}
  </p>
</template>

<script setup lang="ts">
const props = defineProps<{
  links: {
    label: string
    href: string
  }[]
}>()
</script>

<style scoped>

</style>