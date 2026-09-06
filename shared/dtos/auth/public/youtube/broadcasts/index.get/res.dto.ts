import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicYoutubeBroadcastsGETResponse } from "./get.res.dto.d";

export class AuthPublicYoutubeBroadcastsGETResponseDTO extends BaseDTO<AuthPublicYoutubeBroadcastsGETResponse> {
	constructor(values: AuthPublicYoutubeBroadcastsGETResponse) {
		super(values, AuthPublicYoutubeBroadcastsGETResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				stream_id: z.string(),
				live_chat_id: z.string(),
				title: z.string(),
				thumbnail: z.string(),
			}),
		});
	}
}
