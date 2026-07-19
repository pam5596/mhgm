import type { SecureSessionData, User } from "#auth-utils";
import type { Broadcast } from "../../models/interfaces/broadcast.interface";
import type { User } from "../../models/interfaces/user.interface";

export interface BaseDTOInterface {
	sessions?: {
		user?: Partial<User>;
		secure?: Partial<SecureSessionData>;
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	params?: Record<string, any>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	query?: Record<string, any>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	body?: Record<string, any>;
	socket_auth?: {
		channel_id: User["channel_id"];
		stream_id?: Broadcast["stream_id"];
	};
}
