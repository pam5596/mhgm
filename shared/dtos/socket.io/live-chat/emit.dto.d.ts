export interface SocketIOLiveChatEmit {
	user: {
		id: number
		channel_id: string
		name: string
		avatar: string
	}
	keyword: {
		id: numnber
		action: string
		keyword_id: number
	}
	message: string
}
