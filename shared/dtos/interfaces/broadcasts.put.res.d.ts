import type { Broadcast } from "../../shared/models/interfaces/broadcast";

export interface BroadcastsPUTResponse {
	body: {
		id: Broadcast["id"];
	};
}
