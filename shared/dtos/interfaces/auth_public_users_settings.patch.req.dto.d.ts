export interface AuthPublicUsersSettingsPATCHRequest {
	sessions: {
		user_id: bigint;
	};
	body: {
		quest_limit: number;
		player_limit: number;
	};
}
