import type { Broadcast } from "~~/shared/models/interfaces/broadcast";

export interface YoutubeBroadcastsGETRequest {
	sessions: {
		secure: {
			access_token: string;
		};
	};
}
