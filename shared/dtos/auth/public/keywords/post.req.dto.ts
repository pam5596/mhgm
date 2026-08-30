import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicKeywordsPOSTRequest } from "./post.req.dto.d";

export class AuthPublicKeywordsPOSTRequestDTO extends BaseDTO<AuthPublicKeywordsPOSTRequest> {
	constructor(values: AuthPublicKeywordsPOSTRequest) {
		super(values, AuthPublicKeywordsPOSTRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.number(),
			}),
			body: z.strictObject({
				keyword: z.string(),
				action: z.string(),
			}),
		});
	}
}
