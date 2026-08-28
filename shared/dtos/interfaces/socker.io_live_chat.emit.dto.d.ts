export interface SocketIOLiveChatEmit {
	user: {
		id: bigint
		channel_id: string
		name: string
		avatar: string
	},
	chat: {
		message: string
		action: string
		keyword: string
	}
}
