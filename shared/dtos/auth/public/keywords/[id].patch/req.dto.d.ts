export interface AuthPublicKeywords$ID$PATCHRequest {
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
