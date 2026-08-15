<template>
  <AtmCard color="primary" class="p-8 gap-8">
    <div class="w-1/2 flex flex-col gap-8 justify-center">
      <div class="font-cinzel text-4xl">
        <p>
          {{ $t("pages.index.app_title.line1") }}
        </p>
        <p class="text-gradient-primary translate-x-8">
          {{ $t("pages.index.app_title.line2") }}
        </p>
      </div>
      <div>
        <p>{{ $t("pages.index.app_description.line1") }}</p>
        <p>{{ $t("pages.index.app_description.line2") }}</p>
      </div>
      <div class="flex gap-4">
        <AtmButton color="primary" variant="outlined" icon="logos:google-icon">
          {{ $t("pages.index.button.login_for_google") }}
        </AtmButton>
        <AtmButton color="primary" variant="fill" icon="ic:baseline-help">
          {{ $t("pages.index.button.to_about") }}
        </AtmButton>
      </div>
    </div>
    <div class="w-1/2 flex justify-center">
      <NuxtImg class="size-full max-w-xl" src="favicon.svg" />
    </div>
  </AtmCard>
</template>

<script setup lang="ts">
definePageMeta({
  layout: {
    name: "default",
    props: {
      headerType: "public"
    }
  }
})


</script>

<style scoped>

</style>