import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicBroadcastsPUTResponse } from "./interfaces/auth_public_broadcasts.put.res.dto";

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
