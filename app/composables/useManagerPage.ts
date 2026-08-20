import type { AuthPublicBroadcastsPUTResponse } from "~~/shared/dtos/interfaces/auth_public_broadcasts.put.res.dto"
import type { AuthPublicUsersSettingsGETResponse } from "~~/shared/dtos/interfaces/auth_public_users_settings.get.res.dto"
import type { AuthPublicYoutubeBroadcastsGETResponse } from "~~/shared/dtos/interfaces/auth_public_youtube_broadcasts.get.res.dto"
import type { SocketIOLiveChatEmit } from "~~/shared/dtos/interfaces/socker.io_live_chat.emit.dto"

export default async function() {
  const { t } = useI18n()
  const requestAPI = useRequestAPI()
  const { showAlert } = useAlert()

  const { user } = useUserSession()
  const { setClient, connect, disconnect, subscribeEmit } = useLiveChatSocket()

  const is_recruiting = ref(false)
  const player_factory = ref<PlayerFactory>()

  const { data: settings, execute: getUserSetting } = useFetchAPI<AuthPublicUsersSettingsGETResponse["body"]>("/api/auth/public/users/settings")
  const { data: broadcast, execute: getBroadcast } = useFetchAPI<AuthPublicYoutubeBroadcastsGETResponse["body"]>("/api/auth/public/youtube/broadcasts")

  const onPlayerEntry = async (event: SocketIOLiveChatEmit) => {
    console.log(event)
    player_factory.value?.entryPlayer(event.user)
    showAlert({
      type: "info",
      title: t("pages.manager.alert.info_player_entry", { name: event.user.name })
    })
  }

  const onStartRecruit = async () => {
    await getBroadcast()
    if (broadcast.value) {
      const data = await requestAPI<AuthPublicBroadcastsPUTResponse["body"]>("/api/auth/public/broadcasts", {
        method: "PUT",
        body: {
          ...broadcast.value,
          end_at: new Date().toISOString()
        }
      })

      if (data) {
        setClient({
          channel_id: user.value!.channel_id,
          stream_id: broadcast.value.stream_id,
          broadcast_id: data.id,
          user_id: user.value!.user_id
        })
        connect()
        subscribeEmit(user.value!.channel_id, onPlayerEntry)
        is_recruiting.value = true
        showAlert({
          type: "success",
          title: t("pages.manager.alert.success_start_recruit")
        })
      }
    }
  }

  const onStopRecruit = () => {
    is_recruiting.value = false
    disconnect()
  }

  onMounted(async () => {
    if (user.value) {
      await getUserSetting()
      player_factory.value = PlayerFactory.create(
        settings.value.setting.quest_limit
      )
    }
  })

  return {
    user,
    settings,
    is_recruiting,
    player_factory,
    onStartRecruit,
    onStopRecruit
  }
}