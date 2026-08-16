<template>
  <div class="flex justify-between items-center">
    <p class="text-primary-dark font-bold">
      {{ $t("pages.manager.setting_dialog.entry_keywords") }}
    </p>
    <AtmButton @click="onAddKeyword">
      {{ $t("pages.manager.setting_dialog.button.add_keyword") }}
    </AtmButton>
  </div>
  <div class="flex flex-col gap-2">
    <MolKeywordField 
      v-for="(keyword, index) in keywords"
      v-model="keyword.keyword"
      @on-update="onUpdateKeyword(keyword)"
      @on-delete="onDeleteKeyword(keyword)"
      :key="keyword.id"
    />
  </div>
</template>

<script setup lang="ts">
import type { AuthPublicKeywordsPOSTResponse } from '~~/shared/dtos/interfaces/auth_public_keywords.post.res.dto';
import type { AuthPublicUsersSettingsGETResponse } from '~~/shared/dtos/interfaces/auth_public_users_settings.get.res.dto';

const keywords = defineModel<AuthPublicUsersSettingsGETResponse["body"]["keywords"]>({ required: true })

const requestAPI = useRequestAPI()

const onAddKeyword = async () => {
  const { data, error } = await requestAPI<AuthPublicKeywordsPOSTResponse["body"]>(
    `/api/auth/public/keywords`, {
    method: "POST",
    showLoading: true,
    successMessage: "キーワードを登録しました",
    body: {
      keyword: "参加希望",
      action: "ENTRY"
    }
  })
  if (error || !data) return
  keywords.value = [
    ...keywords.value,
    {
      id: data.id,
      keyword: "参加希望",
      action: "ENTRY"
    }
  ]
}

const onUpdateKeyword = async (keyword: {
  id: number,
  keyword: string,
  action: string
}) => {
  const { error } = await requestAPI(
    `/api/auth/public/keywords/${keyword.id}`, {
    method: "PATCH",
    showLoading: true,
    successMessage: "キーワードを更新しました",
    body: {
      keyword: keyword.keyword
    }
  })
  if (error) return
  keywords.value = keywords.value.with(
    keywords.value.findIndex(k => k.id === keyword.id),
    keyword
  )
}

const onDeleteKeyword = async (keyword: {
  id: number
}) => {
  const { error } = await requestAPI(
  `/api/auth/public/keywords/${keyword.id}`, {
    method: "DELETE",
    showLoading: true,
    successMessage: "キーワードを削除しました"
  })
  if (error) return
  keywords.value = keywords.value.filter(k => k.id !== keyword.id)
}

</script>

<style scoped>

</style>