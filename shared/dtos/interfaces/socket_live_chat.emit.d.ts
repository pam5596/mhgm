import type { BaseDTOInterface } from "./_base";
import type { User } from "~~/shared/models/interfaces/user.interface";
import type { ActionLog } from "~~/shared/models/interfaces/action_log.interface";
import type { Keyword } from "~~/shared/models/interfaces/keyword.interface";

export interface SocketLiveChatEmit implements BaseDTOInterface {
  socket: {
    user: {
      channel_id: User["channel_id"],
      name: User["name"],
      avatar: User["avatar"],
    },
    chat: {
      message: ActionLog["message"],
      action: string,
      keyword: Keyword["keyword"],
    }
  }
}