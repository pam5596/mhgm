import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface KeywordsPATCHRequest {
	sessions: {
		user: {
			user_id: number;
		};
	};
	params: {
		id: Keyword["id"];
	};
	body: {
		keyword: Keyword["keyword"];
	};
}
