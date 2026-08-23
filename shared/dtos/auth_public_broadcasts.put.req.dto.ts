import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicBroadcastsPUTRequest } from "./interfaces/auth_public_broadcasts.put.req.dto";

export class AuthPublicBroadcastsPUTRequestDTO extends BaseDTO<AuthPublicBroadcastsPUTRequest> {
	constructor(values: AuthPublicBroadcastsPUTRequest) {
		super(values, AuthPublicBroadcastsPUTRequestDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.number(),
			}),
			body: z.strictObject({
				stream_id: z.string(),
				live_chat_id: z.string(),
				title: z.string(),
				thumbnail: z.string(),
				end_at: z.iso.datetime(),
			}),
		});
	}
}
