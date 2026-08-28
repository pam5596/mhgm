export interface AuthPublicUsersSettingsGETResponse {
	body: {
		setting: {
			quest_limit: number;
			player_limit: number;
		};
		keywords: {
			id: bigint;
			keyword: string;
			action: string;
		}[];
	};
}
