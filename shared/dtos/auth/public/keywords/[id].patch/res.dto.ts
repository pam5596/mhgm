import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicKeywords$ID$PATCHResponse } from "./patch.res.dto.d";

export class AuthPublicKeywords$ID$PATCHResponseDTO extends BaseDTO<AuthPublicKeywords$ID$PATCHResponse> {
	constructor(values: AuthPublicKeywordsPATCHResponse) {
		super(values, AuthPublicKeywords$ID$PATCHResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.number(),
			}),
		});
	}
}
