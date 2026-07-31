export interface AuthPublicUsersSettingsPATCHRequest {
	sessions: {
		user_id: number;
	};
	body: {
		quest_limit: number;
	};
}
