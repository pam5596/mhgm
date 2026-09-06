import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicActionlogsPOSTRequest } from "./req.dto.d";

export class AuthPublicActionlogsPOSTRequestDTO extends BaseDTO<AuthPublicActionlogsPOSTRequest> {
	constructor(values: AuthPublicActionlogsPOSTRequest) {
		super(values, AuthPublicActionlogsPOSTRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				message: z.string(),
				user_id: z.number(),
				broadcast_id: z.number(),
				keyword_id: z.number(),
			}),
		});
	}
}
