import type { User } from "~~/shared/models/interfaces/user.interface";

export interface WebhooksMemberPOSTRequest {
  sessions: {
    user: {
      channel_id: User["channel_id"]
    }
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