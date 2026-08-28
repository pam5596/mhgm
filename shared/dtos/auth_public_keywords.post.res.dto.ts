import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicKeywordsPOSTResponse } from "./interfaces/auth_public_keywords.post.res.dto";

export class AuthPublicKeywordsPOSTResponseDTO extends BaseDTO<AuthPublicKeywordsPOSTResponse> {
	constructor(values: AuthPublicKeywordsPOSTResponse) {
		super(values, AuthPublicKeywordsPOSTResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.bigint().min(1n),
			}),
		});
	}
}
