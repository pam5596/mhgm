import type { AuthPublicBroadcastsPUTResponse } from "~~/shared/dtos/interfaces/auth_public_broadcasts.put.res.dto"
import type { AuthPublicUsersSettingsGETResponse } from "~~/shared/dtos/interfaces/auth_public_users_settings.get.res.dto"
import type { AuthPublicYoutubeBroadcastsGETResponse } from "~~/shared/dtos/interfaces/auth_public_youtube_broadcasts.get.res.dto"

export default async function() {
  const requestAPI = useRequestAPI()
  const { user } = useUserSession()
  const { setClient, connect, disconnect, subscribeEmit } = useLiveChatSocket()

  const is_recruiting = ref(false)

  const { data: settings, execute: getUserSetting } = useFetchAPI<AuthPublicUsersSettingsGETResponse["body"]>("/api/auth/public/users/settings")
  const { data: broadcast, execute: getBroadcast } = useFetchAPI<AuthPublicYoutubeBroadcastsGETResponse["body"]>("/api/auth/public/youtube/broadcasts")

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
        subscribeEmit(user.value!.channel_id, async (event) => {
          console.log(event)
        })
        is_recruiting.value = true
      }
    }
  }

  const onStopRecruit = () => {
    is_recruiting.value = false
    disconnect()
  }

  onMounted(async () => {
    await getUserSetting()
  })

  return {
    user,
    settings,
    is_recruiting,
    onStartRecruit,
    onStopRecruit
  }
}