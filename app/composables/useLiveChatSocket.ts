import { io, type Socket } from "socket.io-client"
import type { SocketIOLiveChatAuth } from "~~/shared/dtos/interfaces/socker.io_live_chat.auth.dto"

export default function() {
  const config = useRuntimeConfig()

  const socket = ref<Socket>()
  const is_connected = ref(false)

  const setClient = (auth: SocketIOLiveChatAuth) => {
    socket.value = io(`${config.public.statefulApiBaseUrl}/live-chat`, {
      autoConnect: false,
      transports: ["polling"],
      auth
    })
  }

  const connect = () => {
    if (!is_connected.value && socket.value) {
      socket.value.connect()

      socket.value.on('connect', () => (is_connected.value = true))
      socket.value.on('disconnect', () => (is_connected.value = false))
    }
  }

  const disconnect = () => {
    socket.value?.disconnect()
  }

  const subscribeEmit = <Event>(
    channel_id: string,
    callback: (event: Event) => Promise<void>
  ) => {
    socket.value?.on(`emit-${channel_id}`, callback)
  }


  return {
    socket,
    is_connected,
    setClient,
    connect,
    disconnect,
    subscribeEmit
  }
}