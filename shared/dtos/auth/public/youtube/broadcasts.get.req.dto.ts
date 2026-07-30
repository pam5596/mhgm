import z from "zod";
import type { AuthPublicYoutubeBroadcastsGETRequest } from "./broadcasts.get.req";
import { BaseDTO } from "../../../_base";

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
