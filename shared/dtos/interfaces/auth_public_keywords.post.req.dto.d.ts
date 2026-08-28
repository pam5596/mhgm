export interface AuthPublicKeywordsPOSTRequest {
	sessions: {
		user_id: bigint;
	};
	body: {
		keyword: string;
		action: string;
	};
}
