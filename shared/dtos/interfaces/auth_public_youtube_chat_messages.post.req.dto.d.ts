export interface AuthPublicYoutubeChatMessagesPOSTRequest {
  sessions: {
    access_token: string
  },
  body: {
    stream_id: string
    message: string
  }
}