<template>
  <div class="flex flex-col gap-2">
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
        @on-delete="ondeleteKeyword(keyword)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const keywords = defineModel<AuthPublicUsersSettingsGETResponse["body"]["keywords"]>({ required: true })

const { postKeywords, patchKeywords, deleteKeywords } = usePublicAPI()
const { t } = useI18n()

const onAddKeyword = async () => {
  const data = await postKeywords(ActionEnum.cancel)
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
  await patchKeywords(keyword.id, keyword.keyword)
  keywords.value = keywords.value.with(
    keywords.value.findIndex(k => k.id === keyword.id),
    keyword
  )
}

const ondeleteKeyword = async (keyword: {
  id: number
}) => {
  await deleteKeywords(keyword.id)
  keywords.value = keywords.value.filter(k => k.id !== keyword.id)
}

</script>

<style scoped>

</style>