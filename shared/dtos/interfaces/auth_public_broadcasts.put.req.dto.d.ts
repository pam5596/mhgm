export interface AuthPublicBroadcastsPUTRequest {
	sessions: {
		user_id: bigint;
	};
	body: {
		stream_id: string;
		live_chat_id: string;
		title: string;
		thumbnail: string;
		end_at: string;
	};
}
