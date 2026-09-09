import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicBroadcastsPATCHResponse } from "./put.res.dto.d";

export class AuthPublicBroadcastsPATCHResponseDTO extends BaseDTO<AuthPublicBroadcastsPATCHResponse> {
	constructor(values: AuthPublicBroadcastsPATCHResponse) {
		super(values, AuthPublicBroadcastsPATCHResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.number(),
			}),
		});
	}
}
