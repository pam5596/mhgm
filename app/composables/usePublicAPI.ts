import type { User } from "#auth-utils"
import type { FactoryPlayer } from "~/types/factory_player"
import type { AuthPublicBroadcastsPUTResponse } from "~~/shared/dtos/interfaces/auth_public_broadcasts.put.res.dto"
import type { AuthPublicKeywordsPOSTResponse } from "~~/shared/dtos/interfaces/auth_public_keywords.post.res.dto"
import type { AuthPublicUsersSettingsGETResponse } from "~~/shared/dtos/interfaces/auth_public_users_settings.get.res.dto"
import type { AuthPublicYoutubeBroadcastsGETResponse } from "~~/shared/dtos/interfaces/auth_public_youtube_broadcasts.get.res.dto"

export default function () {
  const config = useRuntimeConfig()
  const { t } = useI18n()
  const requestAPI = useRequestAPI()

  // GET /api/auth/public/users/settings
  const { data: settings, execute: getUserSetting } = useFetchAPI<AuthPublicUsersSettingsGETResponse["body"]>("/api/auth/public/users/settings", { showLoading: true })
  
  // GET /api/auth/public/youtube/broadcasts
  const { data: broadcast, execute: getBroadcast } = useFetchAPI<AuthPublicYoutubeBroadcastsGETResponse["body"]>("/api/auth/public/youtube/broadcasts",  { showLoading: true })

  // PUT /api/auth/public/broadcasts
  const putBroadcast = async () => await requestAPI<AuthPublicBroadcastsPUTResponse["body"]>(
    "/api/auth/public/broadcasts", {
      method: "PUT",
      body: {
        ...broadcast.value,
        end_at: new Date().toISOString()
      }
    }
  )

  // POST /api/public/webhooks/member
  const postWebhookMember = async (
    user: User,
    player_factory: PlayerFactory
  ) => await requestAPI(
    `/api/public/webhooks/member`, {
      method: "POST",
      headers: {
        "x-api-key": config.public.statefulApiApiKey
      },
      body: {
        streamer: {
          channel_id: user.channel_id,
          avatar: user.avatar,
          name: user.name
        },
        join: player_factory.joiners.map(p => ({
          channel_id: p.channel_id,
          avatar: p.avatar,
          name: p.name,
          join_quests: p.join_quests,
        })),
        wait: player_factory.waiters.map(p => ({
          channel_id: p.channel_id,
          avatar: p.avatar,
          name: p.name,
          wait_quests: p.wait_quests,
        })),
        next: player_factory.next.map(p => ({
          channel_id: p.channel_id,
          avatar: p.avatar,
          name: p.name,
        }))
      }
    }
  )

  // POST /api/auth/public/keywords
  const postKeyword = async (action: ActionUnion) => await requestAPI<AuthPublicKeywordsPOSTResponse["body"]>(
    `/api/auth/public/keywords`, {
    method: "POST",
    showLoading: true,
    successMessage: t("pages.manager.setting_dialog.alert.success_keyword_create"),
    body: {
      keyword: t("pages.manager.setting_dialog.cancel_keyword_form.default_keyword"),
      action
    }
  })

  // PATCH /api/auth/public/keywords/:id
  const patchKeyword = async (id: number, keyword: string) => await requestAPI(
    `/api/auth/public/keywords/${id}`, {
    method: "PATCH",
    showLoading: true,
    successMessage: t("pages.manager.setting_dialog.alert.success_keyword_update"),
    body: { keyword }
  })

  // DELETE /api/auth/public/keywords/:id
  const deleteKeyword = async (id: number) => await requestAPI(
    `/api/auth/public/keywords/${id}`, {
    method: "DELETE",
    showLoading: true,
    successMessage: t("pages.manager.setting_dialog.alert.success_keyword_delete")
  })

  // PATCH /api/auth/public/users/settings
  const patchSettings = async () => await requestAPI(
    "/api/auth/public/users/settings", {
    method: "PATCH",
    showLoading: true,
    successMessage: t("pages.manager.setting_dialog.alert.success_update"),
    body: settings.value.setting
  })

  return {
    settings,
    getUserSetting,
    broadcast,
    getBroadcast,
    putBroadcast,
    postWebhookMember,
    postKeyword,
    patchKeyword,
    deleteKeyword,
    patchSettings
  }
}