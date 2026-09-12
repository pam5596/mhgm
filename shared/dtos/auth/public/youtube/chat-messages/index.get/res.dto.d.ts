export interface AuthPublicYoutubeChatMessagesGETResponse {
  next_page_token: string
  polling_interval: number
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