<template>
  <div class="flex gap-1">
    <AtmButton :color="props.color" variant="outlined" icon="ic:baseline-minus" @click="decreace"/>
    <input
    type="text"
    class="rounded-md p-1 h-9 w-10 text-center"
    :class="styles"
    v-model="model"
    >
    <AtmButton :color="props.color" variant="outlined" icon="ic:baseline-plus" @click="increace"/>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<number>({ default: 0 })

const props = withDefaults(
  defineProps<{
    color?: 'primary' | 'success' | 'error'
    max?: number
    min?: number
  }>(),
  {
    color: "primary",
    max: Infinity,
    min: -Infinity
  }
)
const styles = computed(() => [
{
    "border-gradient-primary": props.color === "primary",
    "border-gradient-success": props.color === "success",
    "border-gradient-error": props.color === "error"
  }
])

const increace = () => { if(model.value < props.max) model.value++ }

const decreace = () => { if(props.min < model.value) model.value-- }



</script>

<style scoped>

</style>