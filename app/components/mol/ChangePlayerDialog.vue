<template>
  <v-dialog v-model="dialog">
    <div class="w-full flex justify-center">
      <AtmCard class="p-4 flex-col gap-2 w-1/2">
        <p class="text-primary-dark font-bold text-xl">
          {{ $t("pages.manager.joiner_manage_card.change_player_dialog.title") }}
        </p>
        <v-divider thickness="2" class="border-primary border-opacity-100" />
        <v-select
          v-model="selectedDummy"
          class="text-primary-dark"
          variant="outlined"
          :placeholder="$t('pages.manager.joiner_manage_card.change_player_dialog.select_placeholder')"
          hide-details
          :items="props.waiters"
          @update:model-value="(waiter) => $emit('onSelected', waiter)"
        >
        <template #selection="{ item }">
          <div class="flex gap-4 items-center">
            <v-avatar :image="item.avatar" />
            <p class="font-bold text-primary-dark">{{ item.name }}</p>
          </div>
        </template>
        <template #item="{ props: itemProps, item }">
          <v-list-item v-bind="{ ...itemProps, title: item.name }">
            <template #title>
              <div class="flex gap-4 p-1 items-center">
                <v-avatar :image="item.avatar" />
                <p class="font-bold text-primary-dark">{{ item.name }}</p>
              </div>
            </template>
          </v-list-item>
        </template>  
        </v-select>
      </AtmCard>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import type { FactoryPlayer } from '~/types/factory_player';

const dialog = defineModel<boolean>("dialog")
const props = defineProps<{
  waiters: FactoryPlayer[]
}>()

defineEmits<{
  onSelected: [waiter: FactoryPlayer]
}>()

const selectedDummy = ref<FactoryPlayer>()

</script>

<style scoped>

</style>