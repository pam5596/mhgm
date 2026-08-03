import z from "zod";
import { BaseDTO } from "./_base";
import type { SocketIOLiveChatAuth } from "./interfaces/socker.io_live_chat.auth.dto";

export class SocketIOLiveChatAuthDTO extends BaseDTO<SocketIOLiveChatAuth> {
	constructor(values: SocketIOLiveChatAuth) {
		super(values, SocketIOLiveChatAuthDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			user_id: z.number(),
			channel_id: z.string(),
			stream_id: z.string(),
			broadcast_id: z.number(),
		});
	}
}
