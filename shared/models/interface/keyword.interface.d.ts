import type { ActionEnum } from "./action.enum";

export interface Keyword {
  id?: number;
  keyword: string;
  action: ActionEnum;
  created_at?: Date;
  user_id: number;
}