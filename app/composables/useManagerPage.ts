import type { SocketIOLiveChatEmit } from "~~/shared/dtos/interfaces/socker.io_live_chat.emit.dto"

export default async function() {
  const { t } = useI18n()
  const { origin } = useRequestURL()

  const { showAlert } = useAlert()
  const { openLoading, closeLoading } = useLoading()
  const onCopy = useClipboard()

  const { user } = useUserSession()
  const { setClient, connect, disconnect, subscribeEmit } = useLiveChatSocket()

  const is_recruiting = ref(false)
  const player_factory = ref<PlayerFactory>()

  const { 
    settings, 
    getUserSetting, 
    broadcast, 
    getBroadcast, 
    putBroadcast, 
    postWebhookMember,
    postChatMessage
  } = usePublicAPI()

  const emitLiveChat = async (event: SocketIOLiveChatEmit) => {
    if (event.chat.action === ActionEnum.entry) {
      player_factory.value?.entryPlayer(event.user)
      showAlert({
        type: "info",
        title: t("composables.use_manager_page.info_message.player_entry", { name: event.user.name })
      })
      const player = player_factory.value?.players.find(p => p.channel_id === event.user.channel_id)
      
      if (player?.status === StatusEnum.join) {
        await postChatMessage(
          t("composables.use_manager_page.chat_message.entry_as_joiner", { 
            name: player.name 
          })
        )
      } else if (player?.status === StatusEnum.wait) {
        await postChatMessage(
          t("composables.use_manager_page.chat_message.entry_as_waiter", {
            name: player.name,
            quests: player.wait_quests
          })
        )
      }
    } else if (event.chat.action === ActionEnum.cancel) {
      player_factory.value?.cancelPlayer(event.user.channel_id)
      showAlert({
        type: "info",
        title: t("composables.use_manager_page.info_message.player_cancel", { name: event.user.name })
      })
      t("composables.use_manager_page.chat_message.cancel", {
        name: event.user.name
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
          title: t("composables.use_manager_page.success_mesage.start_recruit")
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

  const onCopyMemberBrowserSource = async (status: "join" | "next" | "wait") => await onCopy(
    `${origin}/obs/${user.value?.channel_id}/member?status=${status}`
  )

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
      if (players?.length) await postWebhookMember(
        user.value!, 
        player_factory.value!
      )
    },
    { deep: true }
  )

  return {
    user,
    is_recruiting,
    player_factory,
    onStartRecruit,
    onStopRecruit,
    onCopyMemberBrowserSource
  }
}