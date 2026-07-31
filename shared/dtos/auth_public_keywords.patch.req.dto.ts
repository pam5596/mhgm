import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicKeywordsPATCHRequest } from "./interfaces/auth_public_keywords.patch.req.dto";

export class AuthPublicKeywordsPATCHRequestDTO extends BaseDTO<AuthPublicKeywordsPATCHRequest> {
	constructor(values: AuthPublicKeywordsPATCHRequest) {
		super(values, AuthPublicKeywordsPATCHRequestDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.number(),
			}),
			params: z.strictObject({
				id: z.coerce.number(),
			}),
			body: z.strictObject({
				keyword: z.string(),
			}),
		});
	}
}
