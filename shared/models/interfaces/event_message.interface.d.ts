export interface EventMessage {
	user_id: number;
	is_enabled: boolean;
  entry_as_joiner: string;
  entry_as_waiter: string;
  cancel: string;
	updated_at?: Date;
}
