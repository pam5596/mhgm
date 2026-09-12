export interface AuthPublicYoutubeChatMessagesGETResponse {
  chat_messages: {
    user: {
      id: number
      name: string
      avatar: string
      channel_id: string
    }
    keyword: {
      id: numnber
      action: string
    }
    message: string
  }[]
}