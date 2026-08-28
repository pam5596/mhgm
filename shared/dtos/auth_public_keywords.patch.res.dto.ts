import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicKeywordsPATCHResponse } from "./interfaces/auth_public_keywords.patch.res.dto";

export class AuthPublicKeywordsPATCHResponseDTO extends BaseDTO<AuthPublicKeywordsPATCHResponse> {
	constructor(values: AuthPublicKeywordsPATCHResponse) {
		super(values, AuthPublicKeywordsPATCHResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.bigint().min(1n),
			}),
		});
	}
}
