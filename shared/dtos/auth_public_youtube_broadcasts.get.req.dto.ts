import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicYoutubeBroadcastsGETRequest } from "./interfaces/auth_public_youtube_broadcasts.get.req.dto";

export class AuthPublicYoutubeBroadcastsGETRequestDTO extends BaseDTO<AuthPublicYoutubeBroadcastsGETRequest> {
	constructor(values: AuthPublicYoutubeBroadcastsGETRequest) {
		super(values, AuthPublicYoutubeBroadcastsGETRequestDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				access_token: z.string(),
			}),
		});
	}
}
