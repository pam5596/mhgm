import type { Broadcast } from "../../shared/models/interfaces/broadcast";

export interface YoutubeBroadcastsGETResponse {
  sessions: {
    secure: {
      access_token: string
    }
  },
  body: {
    stream_id: Broadcast["stream_id"],
    title: Broadcast["title"],
    thumbnail: Broadcast["thumbnail"]
  }
}