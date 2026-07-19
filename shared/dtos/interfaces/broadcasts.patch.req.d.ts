export interface BroadcastsPATCHRequest {
	sessions: {
		user: {
			user_id: number;
		};
	};
	params: {
		id: number;
	};
	body: {
		end_at: Date;
	};
}
