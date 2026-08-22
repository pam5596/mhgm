export interface AuthPublicWebhooksMemberPOSTRequest {
	sessions: {
		channel_id: string;
	};
	body: {
		users: {
			channel_id: string;
			name: string;
			avatar: string;
			status: string;
			join_quests: number;
			wait_quests: number;
		}[];
	};
}
