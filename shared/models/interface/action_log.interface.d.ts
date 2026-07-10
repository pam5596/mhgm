export interface ActionLog {
  id?: number;
  message: string;
  created_at?: Date;
  user_id: number;
  broadcast_id: number;
  keyword_id: number;
}