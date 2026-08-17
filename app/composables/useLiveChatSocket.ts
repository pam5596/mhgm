import { io, type Socket } from "socket.io-client"
import type { SocketAuth } from "~~/shared/types/socket_auth"

export default function() {
  const config = useRuntimeConfig()

  const socket = ref<Socket>()
  const is_connected = ref(false)

  const setClient = (auth: SocketAuth) => {
    socket.value = io(`${config.public.statefulApiBaseUrl}/live-chat`, {
      autoConnect: false,
      transports: ["polling"],
      auth
    })
  }

  const connect = (channel_id: string) => {
    if (!is_connected.value && socket.value) {
      socket.value.connect()
      socket.value.on('connect', () => (is_connected.value = true))
      socket.value.on('disconnect', () => (is_connected.value = false))
      socket.value.on(`emit-${channel_id}`, (event) => {
        console.log(event)
      })
    }
  }

  const disconnect = () => {
    socket.value?.disconnect()
  }


  return {
    socket,
    is_connected,
    setClient,
    connect,
    disconnect
  }
}