export interface AuthPublicYoutubeChatMessagesPOSTRequest {
  sessions: {
    access_token: string
  },
  body: {
    live_chat_id: string
    message: string
  }
}