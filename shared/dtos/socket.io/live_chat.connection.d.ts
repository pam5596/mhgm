export interface SocketLiveChatConnection {
	auth: {
		channel_id: string;
		stream_id: string;
		broadcast_id: number;
		user_id: number;
	};
}
