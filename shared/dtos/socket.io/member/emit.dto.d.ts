export interface SocketIOMemberEmit {
	streamer: {
		channel_id: string,
		avatar: string,
		name: string,
	},
	join: {
		channel_id: string,
		avatar: string,
		name: string,
		join_quests: number,
	}[],
	wait: {
		channel_id: string,
		avatar: string,
		name: string,
		wait_quests: number,
	}[],
	next: {
		channel_id: string,
		avatar: string,
		name: string
	}[]
}
