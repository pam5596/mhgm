import type { User } from "~~/shared/models/interfaces/user.interface";
import type { BaseDTOInterface } from "./_base";
import type { StatusUnion } from "../../enums/status.enum"

export interface WebhooksMemberPOSTRequest implements BaseDTOInterface {
  query: {
    channel_id: User["channel_id"]
  },
  body: {
    users: {
      channel_id: User["channel_id"],
      name: User["name"],
      avatar: User["avatar"],
      status: string,
      join_quests: number,
      wait_quests: number
    }[]
  }
}