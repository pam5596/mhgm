import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicKeywordsPATCHResponse } from "./patch.res.dto.d";

export class AuthPublicKeywordsPATCHResponseDTO extends BaseDTO<AuthPublicKeywordsPATCHResponse> {
	constructor(values: AuthPublicKeywordsPATCHResponse) {
		super(values, AuthPublicKeywordsPATCHResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.number(),
			}),
		});
	}
}
