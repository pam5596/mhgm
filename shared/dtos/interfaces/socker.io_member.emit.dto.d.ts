export interface SocketIOMemberEmit {
	users: {
		channel_id: string;
		name: string;
		avatar: string;
		status: string;
		join_quests: number;
		wait_quests: number;
	}[];
}
