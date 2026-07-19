import type { User } from "~~/shared/models/interfaces/user.interface";
import type { Broadcast } from "../../models/interfaces/broadcast.interface"
import type { User } from "../../models/interfaces/user.interface"

export interface SocketLiveChatConnection {
  socket_auth: {
    channel_id: User["channel_id"],
    stream_id?: Broadcast["stream_id"]
  }
}