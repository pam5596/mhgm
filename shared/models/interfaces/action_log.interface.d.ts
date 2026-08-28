export interface ActionLog {
	id?: bigint;
	message: string;
	created_at?: Date;
	user_id: bigint;
	broadcast_id: bigint;
	keyword_id: bigint;
}
