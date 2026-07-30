export interface AuthPublicWebhooksMemberPOSTRequest {
	sessions: {
		channel_id: string;
	};
	body: {
		users: {
			channel_id: string;
			name: stgring;
			avatar: string;
			status: string;
			join_quests: number;
			wait_quests: number;
		}[];
	};
}
