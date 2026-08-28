import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicKeywordsPATCHRequest } from "./interfaces/auth_public_keywords.patch.req.dto";

export class AuthPublicKeywordsPATCHRequestDTO extends BaseDTO<AuthPublicKeywordsPATCHRequest> {
	constructor(values: AuthPublicKeywordsPATCHRequest) {
		super(values, AuthPublicKeywordsPATCHRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.bigint().min(1n),
			}),
			params: z.strictObject({
				id: z.coerce.bigint().min(1n),
			}),
			body: z.strictObject({
				keyword: z.string(),
			}),
		});
	}
}
