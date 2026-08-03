export interface AuthPublicKeywordsPATCHRequest {
	sessions: {
		user_id: number;
	};
	params: {
		id: number;
	};
	body: {
		keyword: string;
	};
}
