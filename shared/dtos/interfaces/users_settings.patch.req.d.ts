import type { Setting } from "../../shared/models/interfaces/setting.interface";

export interface UsersSettingsPATCHRequest {
	sessions: {
		user: {
			user_id: number;
		};
	};
	body: {
		quest_limit: Setting["quest_limit"];
	};
}
