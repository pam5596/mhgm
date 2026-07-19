import type { User } from "~~/shared/models/interfaces/user.interface";

export interface SocketMemberEmit {
	socket: {
		users: {
			channel_id: User["channel_id"];
			name: User["name"];
			avatar: User["avatar"];
			status: string;
			join_quests: number;
			wait_quests: number;
		}[];
	};
}
