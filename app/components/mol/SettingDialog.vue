<template>
  <v-dialog v-model="model" class="text-center">
    <div class="w-full flex justify-center">
      <AtmCard class="p-4 flex-col gap-2 w-1/2">
        <p class="text-primary-dark font-bold text-xl">
          {{ $t("pages.manager.setting_dialog.title") }}
        </p>
        <v-divider thickness="2" class="border-primary border-opacity-100" />
        <div class="flex gap-2 flex-col">
          <div class="flex justify-between items-center">
            <p class="text-primary-dark font-bold">
              {{ $t("pages.manager.setting_dialog.change_quests") }}
            </p>
            <MolCounter />
          </div>
          <div class="flex justify-between items-center">
            <p class="text-primary-dark font-bold">
              {{ $t("pages.manager.setting_dialog.entry_keywords") }}
            </p>
            <AtmButton>
              {{ $t("pages.manager.setting_dialog.button.add_keyword") }}
            </AtmButton>
          </div>
          <div class="flex flex-col gap-2">
            <KeywordField />
            <KeywordField />
            <KeywordField />
          </div>
          <div class="flex justify-between items-center">
            <p class="text-primary-dark font-bold">
              {{ $t("pages.manager.setting_dialog.cancel_keywords") }}
            </p>
            <AtmButton>
              {{ $t("pages.manager.setting_dialog.button.add_keyword") }}
            </AtmButton>
          </div>
          <div class="flex flex-col gap-2">
            <KeywordField />
            <KeywordField />
            <KeywordField />
          </div>
        </div>
      </AtmCard>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import KeywordField from './KeywordField.vue';

const model = defineModel<boolean>()
</script>

<style scoped>

</style>