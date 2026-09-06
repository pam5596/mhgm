export interface AuthPublicBroadcastsPUTRequest {
	sessions: {
		user_id: number;
	};
	body: {
		id: number;
		stream_id: string;
		live_chat_id: string;
		title: string;
		thumbnail: string;
		end_at: string;
	};
}
