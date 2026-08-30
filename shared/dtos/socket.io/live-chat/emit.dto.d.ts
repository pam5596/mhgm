export interface SocketIOLiveChatEmit {
	user: {
		id: number
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
