export interface AuthPublicKeywordsPATCHRequest {
	sessions: {
		user_id: bigint;
	};
	params: {
		id: bigint;
	};
	body: {
		keyword: string;
	};
}
