export interface Broadcast {
	id?: bigint;
	title: string;
	thumbnail: string;
	stream_id: string;
	live_chat_id: string;
	begin_at?: Date;
	end_at: Date | null;
	user_id: bigint;
}
