import z from "zod";
import { BaseDTO } from "../../../_base";
import type { AuthPublicBroadcastsPUTResponse } from "./index.put.res";

export class AuthPublicBroadcastsPUTResponseDTO extends BaseDTO<AuthPublicBroadcastsPUTResponse> {
	constructor(values: AuthPublicBroadcastsPUTResponse) {
		super(values, AuthPublicBroadcastsPUTResponseDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.number(),
			}),
		});
	}
}
