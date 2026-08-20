import type { SocketIOLiveChatEmit } from "~~/shared/dtos/interfaces/socker.io_live_chat.emit.dto"

export default async function() {
  const { t } = useI18n()

  const { showAlert } = useAlert()
  const { openLoading, closeLoading } = useLoading()

  const { user } = useUserSession()
  const { setClient, connect, disconnect, subscribeEmit } = useLiveChatSocket()

  const is_recruiting = ref(false)
  const player_factory = ref<PlayerFactory>()

  const { settings, getUserSetting, broadcast, getBroadcast, putBroadcast, postWebhookMember } = usePublicAPI()

  const emitLiveChat = async (event: SocketIOLiveChatEmit) => {
    if (event.chat.action === ActionEnum.entry) {
      player_factory.value?.entryPlayer(event.user)
      showAlert({
        type: "info",
        title: t("pages.manager.alert.info_player_entry", { name: event.user.name })
      })
    } else if (event.chat.action === ActionEnum.cancel) {
      player_factory.value?.cancelPlayer(event.user.channel_id)
      showAlert({
        type: "info",
        title: t("pages.manager.alert.info_player_cancel", { name: event.user.name })
      })
    }
  }

  const onStartRecruit = async () => {
    openLoading()
    await getBroadcast()
    if (broadcast.value) {
      const data = await putBroadcast()
      if (data) {
        setClient({
          channel_id: user.value!.channel_id,
          stream_id: broadcast.value.stream_id,
          broadcast_id: data.id,
          user_id: user.value!.user_id
        })
        connect()
        subscribeEmit(user.value!.channel_id, emitLiveChat)
        is_recruiting.value = true
        showAlert({
          type: "success",
          title: t("pages.manager.alert.success_start_recruit")
        })
      }
      closeLoading()
    }
  }

  const onStopRecruit = async () => {
    is_recruiting.value = false
    disconnect()
    await putBroadcast()
  }

  onMounted(async () => {
    if (user.value) {
      await getUserSetting()
      player_factory.value = PlayerFactory.create(
        settings.value.setting.quest_limit
      )
    }
  })

  watch(
    () => player_factory.value?.players,
    async (players) => {
      if (players?.length) await postWebhookMember(user.value!, players)
    },
    { deep: true }
  )

  return {
    user,
    is_recruiting,
    player_factory,
    onStartRecruit,
    onStopRecruit
  }
}