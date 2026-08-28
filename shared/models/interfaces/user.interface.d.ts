export interface User {
	id?: bigint;
	channel_id: string;
	name: string;
	avatar: string;
	created_at?: Date;
}
