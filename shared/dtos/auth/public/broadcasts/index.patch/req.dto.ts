import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicBroadcastsPATCHRequest } from "./req.dto.d";

export class AuthPublicBroadcastsPATCHRequestDTO extends BaseDTO<AuthPublicBroadcastsPATCHRequest> {
	constructor(values: AuthPublicBroadcastsPATCHRequest) {
		super(values, AuthPublicBroadcastsPATCHRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.number(),
			}),
			body: z.strictObject({
				id: z.number(),
				stream_id: z.string(),
				live_chat_id: z.string(),
				title: z.string(),
				thumbnail: z.string(),
				end_at: z.iso.datetime(),
			}),
		});
	}
}
