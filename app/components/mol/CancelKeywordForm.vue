<template>
  <div class="flex justify-between items-center">
    <p class="text-primary-dark font-bold">
      {{ $t("pages.manager.setting_dialog.entry_keyword_form.title") }}
    </p>
    <AtmButton @click="onAddKeyword">
      {{ $t("pages.manager.setting_dialog.button.add_keyword") }}
    </AtmButton>
  </div>
  <div class="flex flex-col gap-2">
    <MolKeywordField 
      v-for="keyword in keywords"
      v-model="keyword.keyword"
      @on-update="onUpdateKeyword(keyword)"
      @on-delete="onDeleteKeyword(keyword)"
      :key="keyword.id"
    />
  </div>
</template>

<script setup lang="ts">
import type { AuthPublicUsersSettingsGETResponse } from '~~/shared/dtos/interfaces/auth_public_users_settings.get.res.dto';

const keywords = defineModel<AuthPublicUsersSettingsGETResponse["body"]["keywords"]>({ required: true })

const { postKeyword, patchKeyword, deleteKeyword } = usePublicAPI()
const { t } = useI18n()

const onAddKeyword = async () => {
  const data = await postKeyword(ActionEnum.cancel)
  keywords.value = [
    ...keywords.value,
    {
      id: data.id,
      keyword: t("pages.manager.setting_dialog.cancel_keyword_form.default_keyword"),
      action: ActionEnum.cancel
    }
  ]
}

const onUpdateKeyword = async (keyword: {
  id: number,
  keyword: string,
  action: string
}) => {
  await patchKeyword(keyword.id, keyword.keyword)
  keywords.value = keywords.value.with(
    keywords.value.findIndex(k => k.id === keyword.id),
    keyword
  )
}

const onDeleteKeyword = async (keyword: {
  id: number
}) => {
  await deleteKeyword(keyword.id)
  keywords.value = keywords.value.filter(k => k.id !== keyword.id)
}

</script>

<style scoped>

</style>