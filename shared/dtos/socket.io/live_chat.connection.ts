import z from "zod";
import { BaseDTO } from "../_base";
import type { SocketLiveChatConnection } from "./live_chat.connection.d";

export class SocketLiveChatConnectionDTO extends BaseDTO<SocketLiveChatConnection> {
	constructor(values: SocketLiveChatConnection) {
		super(values, SocketLiveChatConnectionDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			auth: z.strictObject({
				user_id: z.number(),
				channel_id: z.string(),
				stream_id: z.string(),
				broadcast_id: z.number(),
			}),
		});
	}
}
