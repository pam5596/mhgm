import type { StatusUnion } from "~~/shared/enums/status.enum"
import type { DisplayUser } from "./display_user"

export interface FactoryPlayer extends DisplayUser {
  status: StatusUnion
  wait_quests: number
  join_quests: number
}