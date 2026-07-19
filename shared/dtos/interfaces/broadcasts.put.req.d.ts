import type { Broadcast } from "../../shared/models/interfaces/broadcast";

export interface BroadcastsPUTRequest {
	sessions: {
		user: {
			user_id: number;
		};
	};
	body: {
		stream_id: Broadcast["stream_id"];
		title: Broadcast["title"];
		thumbnail: Broadcast["thumbnail"];
	};
}
