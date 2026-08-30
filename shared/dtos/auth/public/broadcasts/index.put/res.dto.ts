import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicBroadcastsPUTResponse } from "./put.res.dto.d";

export class AuthPublicBroadcastsPUTResponseDTO extends BaseDTO<AuthPublicBroadcastsPUTResponse> {
	constructor(values: AuthPublicBroadcastsPUTResponse) {
		super(values, AuthPublicBroadcastsPUTResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.number(),
			}),
		});
	}
}
