export interface AuthPublicUsersSettingsGETResponse {
	body: {
		setting: {
			quest_limit: number;
			player_limit: number;
		};
		keywords: {
			id: number;
			keyword: string;
			action: string;
		}[];
		event_message: {
			
		}
	};
}
