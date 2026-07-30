import z from "zod";
import type { AuthPublicYoutubeBroadcastsGETResponse } from "./broadcasts.get.res";
import { BaseDTO } from "../../../_base";

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
