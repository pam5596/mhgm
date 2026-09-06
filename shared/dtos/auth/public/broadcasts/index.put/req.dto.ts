import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicBroadcastsPUTRequest } from "./req.dto.d";

export class AuthPublicBroadcastsPUTRequestDTO extends BaseDTO<AuthPublicBroadcastsPUTRequest> {
	constructor(values: AuthPublicBroadcastsPUTRequest) {
		super(values, AuthPublicBroadcastsPUTRequestDTO.schema());
	}

	static schema() {
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
