export interface Keyword {
  id?: number;
  keyword: string;
  action: "ENTRY" | "CANCEL";
  created_at?: Date;
  user_id: number;
}