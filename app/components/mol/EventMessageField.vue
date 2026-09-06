<template>
  <div class="flex flex-col justify-between">
    <p class="text-primary-dark font-bold">
      {{ props.title }}
    </p>
    <p class="text-primary-dark text-sm">
      {{ props.description }}
    </p>
    <AtmTextField 
      v-model="message" 
      class="w-full"
      :placeholder="$t('components.molecure.event_message_field.placeholder')"
    />
  </div>
</template>

<script setup lang="ts">
const nullable_message = defineModel<string|null>({ required: true })
const message = computed({
  get: () => nullable_message.value || "",
  set: (value) => {
    nullable_message.value = value.length === 0 ? null : value
  }
})

const props = defineProps<{
  title: string;
  description?: string;
}>()

</script>

<style scoped>

</style>