// shared/types/auth.d.ts
declare module "#auth-utils" {
	interface User {
		user_id: bigint;
		channel_id: string;
		name: string;
		avatar: string;
	}

	interface SecureSessionData {
		access_token: string;
	}
}

export {};
