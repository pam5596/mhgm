import type { User } from "#auth-utils"

export default function () {
  const config = useRuntimeConfig()
  const { t } = useI18n()
  const requestAPI = useRequestAPI()

  // GET /api/auth/public/users/settings
  const { data: settings, execute: getUsersSettings } = useFetchAPI<AuthPublicUsersSettingsGETResponse["body"]>(
    "/api/auth/public/users/settings", { 
      showLoading: true 
    })
  
  // GET /api/auth/public/youtube/broadcasts
  const { data: broadcast, execute: getBroadcasts } = useFetchAPI<AuthPublicYoutubeBroadcastsGETResponse["body"]>(
    "/api/auth/public/youtube/broadcasts", {
      showLoading: true 
    })

  // POST /api/auth/public/youtube/chat-messages
  const postChatMessages = async (
    message: string
  ) => await requestAPI<AuthPublicYoutubeChatMessagesPOSTRequest["body"]>(
    "/api/auth/public/youtube/chat-messages", {
      method: "POST",
      body: {
        live_chat_id: broadcast.value.live_chat_id,
        message
      }
    }
  )

  // PUT /api/auth/public/broadcasts
  const putBroadcasts = async () => await requestAPI<AuthPublicBroadcastsPATCHResponse["body"]>(
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
  const postKeywords = async (action: ActionUnion) => await requestAPI<AuthPublicKeywordsPOSTResponse["body"]>(
    `/api/auth/public/keywords`, {
    method: "POST",
    showLoading: true,
    successMessage: t("composables.use_public_api.success_messages.create_keyword"),
    body: {
      keyword: action === "ENTRY" ? 
        t("components.molecure.entry_keyword_form.default_keyword") :
        t("components.molecure.cancel_keyword_form.default_keyword"),
      action
    }
  })

  // PATCH /api/auth/public/keywords/:id
  const patchKeywords = async (id: number, keyword: string) => await requestAPI(
    `/api/auth/public/keywords/${id}`, {
    method: "PATCH",
    showLoading: true,
    successMessage: t("composables.use_public_api.success_messages.update_keyword"),
    body: { keyword }
  })

  // DELETE /api/auth/public/keywords/:id
  const deleteKeywords = async (id: number) => await requestAPI(
    `/api/auth/public/keywords/${id}`, {
    method: "DELETE",
    showLoading: true,
    successMessage: t("composables.use_public_api.success_messages.delete_keyword")
  })

  // PATCH /api/auth/public/users/settings
  const patchSettings = async () => await requestAPI(
    "/api/auth/public/users/settings", {
    method: "PATCH",
    showLoading: true,
    successMessage: t("composables.use_public_api.success_messages.update_settings"),
    body: settings.value.setting
  })

  // PATCH /api/auth/public/users/event-messages
  const patchEventMessages = async () => await requestAPI(
    "/api/auth/public/users/event-messages", {
    method: "PATCH",
    showLoading: true,
    body: settings.value.event_message
  })

  const postActionLogs = async (
    message: string,
    user_id: number,
    keyword_id: number
  ) => await requestAPI(
    "/api/auth/public/action-logs", {
      method: "POST",
      body: {
        message,
        user_id,
        keyword_id,
        broadcast_id: broadcast.value.id
      }
    }
  )

  return {
    settings,
    getUsersSettings,
    broadcast,
    getBroadcasts,
    putBroadcasts,
    postWebhookMember,
    postKeywords,
    patchKeywords,
    deleteKeywords,
    patchSettings,
    postChatMessages,
    patchEventMessages,
    postActionLogs
  }
}