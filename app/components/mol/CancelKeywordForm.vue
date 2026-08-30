<template>
  <div class="flex justify-between items-center">
    <p class="text-primary-dark font-bold">
      {{ $t("components.molecure.cancel_keyword_form.title") }}
    </p>
    <AtmButton @click="onAddKeyword">
      {{ $t("components.molecure.cancel_keyword_form.add_keyword_button_text") }}
    </AtmButton>
  </div>
  <div class="flex flex-col gap-2">
    <MolKeywordField 
      v-for="keyword in keywords"
      :key="keyword.id"
      v-model="keyword.keyword"
      @on-update="onUpdateKeyword(keyword)"
      @on-delete="onDeleteKeyword(keyword)"
    />
  </div>
</template>

<script setup lang="ts">
const keywords = defineModel<AuthPublicUsersSettingsGETResponse["body"]["keywords"]>({ required: true })

const { postKeyword, patchKeyword, deleteKeyword } = usePublicAPI()
const { t } = useI18n()

const onAddKeyword = async () => {
  const data = await postKeyword(ActionEnum.cancel)
  keywords.value = [
    ...keywords.value,
    {
      id: data.id,
      keyword: t("components.molecure.cancel_keyword_form.default_keyword"),
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