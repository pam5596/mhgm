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
    getUsersSettings, 
    broadcast, 
    getBroadcasts, 
    putBroadcasts, 
    postWebhookMember,
    postChatMessages,
    postActionLogs
  } = usePublicAPI()

  const emitLiveChat = async (event: SocketIOLiveChatEmit) => {
    if (event.keyword.action === ActionEnum.entry) {
      const duplicate_player = player_factory.value?.getPlayerByChannelId(event.user.channel_id)
      if (duplicate_player) {
        if (duplicate_player.status === StatusEnum.join && settings?.value.event_message.duplicate_as_joiner) {
          await postChatMessages(
            interpolateEventmessage(settings.value.event_message.duplicate_as_joiner, { 
              name: duplicate_player.name
            })
          )
        } else if (duplicate_player.status === StatusEnum.wait && settings?.value.event_message.duplicate_as_waiter) {
          await postChatMessages(
            interpolateEventmessage(settings.value.event_message.duplicate_as_waiter, { 
              name: duplicate_player.name,
              quests: duplicate_player.wait_quests
            })
          )
        }
      } else {
        player_factory.value?.entryPlayer(event.user)
        showAlert({
          type: "info",
          title: t("composables.use_manager_page.info_message.player_entry", { name: event.user.name })
        })
        const player = player_factory.value?.players.find(p => p.channel_id === event.user.channel_id)
        
        if (player?.status === StatusEnum.join && settings?.value.event_message.entry_as_joiner) {
          await postChatMessages(
            interpolateEventmessage(settings.value.event_message.entry_as_joiner, { 
              name: player.name 
            })
          )
        } else if (player?.status === StatusEnum.wait && settings?.value.event_message.entry_as_waiter) {
          await postChatMessages(
            interpolateEventmessage(settings.value.event_message.entry_as_waiter, {
              name: player.name,
              quests: player.wait_quests
            })
          )
        }

        await postActionLogs(event.message, event.user.id, event.keyword.id)
      }
    } else if (event.keyword.action === ActionEnum.cancel) {
      player_factory.value?.cancelPlayer(event.user.channel_id)
      showAlert({
        type: "info",
        title: t("composables.use_manager_page.info_message.player_cancel", { name: event.user.name })
      })
      if (settings?.value.event_message.cancel) interpolateEventmessage(settings.value.event_message.cancel, {
        name: event.user.name
      })
      await postActionLogs(event.message, event.user.id, event.keyword.id)
    }
  }

  const onStartRecruit = async () => {
    openLoading()
    await getBroadcasts()
    if (broadcast.value) {
      const data = await putBroadcasts()
      if (data) {
        setClient({
          channel_id: user.value!.channel_id,
          stream_id: broadcast.value.stream_id,
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
    await putBroadcasts()
  }

  const onCopyMemberBrowserSource = async (status: "join" | "next" | "wait") => await onCopy(
    `${origin}/obs/${user.value?.channel_id}/member?status=${status}`
  )

  onMounted(async () => {
    if (user.value) {
      await getUsersSettings()
      player_factory.value = PlayerFactory.create(
        settings.value.setting,
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