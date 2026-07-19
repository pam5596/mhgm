import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface KeywordsDELETERequest {
	sessions: {
		user: {
			user_id: number;
		};
	};
	params: {
		id: Keyword["id"];
	};
}
