import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface KeywordsPOSTResponse {
	body: {
		id: Keyword["id"];
	};
}
