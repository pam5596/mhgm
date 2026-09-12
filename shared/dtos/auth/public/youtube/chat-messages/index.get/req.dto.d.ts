export interface AuthPublicYoutubeChatMessagesGETRequest {
  sessions: {
    access_token: string
  }
  params: {
    live_chat_id: string
    next_page_token: string
  }
}