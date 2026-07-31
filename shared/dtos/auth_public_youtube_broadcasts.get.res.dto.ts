import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicYoutubeBroadcastsGETResponse } from "./interfaces/auth_public_youtube_broadcasts.get.res.dto";

export class AuthPublicYoutubeBroadcastsGETResponseDTO extends BaseDTO<AuthPublicYoutubeBroadcastsGETResponse> {
	constructor(values: AuthPublicYoutubeBroadcastsGETResponse) {
		super(values, AuthPublicYoutubeBroadcastsGETResponseDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			body: z.strictObject({
				stream_id: z.string(),
				title: z.string(),
				thumbnail: z.string(),
			}),
		});
	}
}
