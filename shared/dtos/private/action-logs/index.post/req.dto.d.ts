export interface PrivateActionlogsPOSTRequest {
  body: {
    message: string,
    user_id: number,
    broadcast_id: number,
    keyword_id: number
  }
}