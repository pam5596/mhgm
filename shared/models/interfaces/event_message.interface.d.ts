export interface EventMessage {
	user_id: number;
  entry_as_joiner: string | null;
  entry_as_waiter: string | null;
  duplicate_as_joiner: string | null;
  duplicate_as_waiter: string | null;
  cancel: string | null;
	updated_at?: Date;
}
