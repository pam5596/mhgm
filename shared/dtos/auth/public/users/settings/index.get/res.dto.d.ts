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
			entry_as_joiner: string | null;
			entry_as_waiter: string | null;
			duplicate_as_joiner: string | null;
			duplicate_as_waiter: string | null;
			cancel: string | null;
		}
	};
}
