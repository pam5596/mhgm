<template>
  <div class="flex gap-4 flex-col">
    <MolEventMessageField 
      v-for="(event, index) in events"
      :key="index"
      :title="$t(event.title)"
      :description="$t(event.description)"
      v-model="event.model.value"
    />
  </div>
</template>

<script setup lang="ts">
const event_message = defineModel<AuthPublicUsersSettingsGETResponse["body"]["event_message"]>({ required: true })

const events = computed(() => {
  const keys = Object.keys(event_message.value) as Array<keyof typeof event_message.value>
  return keys.map(event => ({
    title: `components.molecure.event_message_field.${event}_title`,
    description: `components.molecure.event_message_field.${event}_description`,
    model: computed({
      get: () => event_message.value[event],
      set: (value) => {
        event_message.value[event] = value
      }
    })
  }))
})

</script>

<style scoped>

</style>