export interface PrivateActionlogsPOSTRequest {
  body: {
    message: string,
    user_id: bigint,
    broadcast_id: bigint,
    keyword_id: bigint
  }
}