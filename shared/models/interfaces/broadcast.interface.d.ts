export interface Broadcast {
	id?: number;
	title: string;
	thumbnail: string;
	stream_id: string;
	begin_at?: Date;
	end_at: Date | null;
	user_id: number;
}
