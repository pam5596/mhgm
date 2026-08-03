export interface AuthPublicBroadcastsPUTRequest {
	sessions: {
		user_id: number;
	};
	body: {
		stream_id: string;
		title: string;
		thumbnail: string;
		end_at: Date;
	};
}
