export interface EventMessage {
	user_id: number;
  entry_as_joiner?: string;
  entry_as_waiter?: string;
  duplicate_as_joiner?: string;
  duplicate_as_waiter?: string;
  cancel?: string;
	updated_at?: Date;
}
