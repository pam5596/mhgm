import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicKeywordsPOSTRequest } from "./interfaces/auth_public_keywords.post.req.dto";

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
