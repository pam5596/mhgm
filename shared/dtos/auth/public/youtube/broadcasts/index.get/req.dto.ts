import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicYoutubeBroadcastsGETRequest } from "./req.dto.d";

export class AuthPublicYoutubeBroadcastsGETRequestDTO extends BaseDTO<AuthPublicYoutubeBroadcastsGETRequest> {
	constructor(values: AuthPublicYoutubeBroadcastsGETRequest) {
		super(values, AuthPublicYoutubeBroadcastsGETRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				access_token: z.string(),
			}),
		});
	}
}
