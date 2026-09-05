export interface AuthPublicKeywordsPOSTRequest {
	sessions: {
		user_id: number;
	};
	body: {
		keyword: string;
		action: string;
	};
}
