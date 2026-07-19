import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface KeywordsPOSTRequest {
	sessions: {
		user: {
			user_id: number;
		};
	};
	body: {
		keyword: Keyword["keyword"];
		action: Keyword["action"];
	};
}
