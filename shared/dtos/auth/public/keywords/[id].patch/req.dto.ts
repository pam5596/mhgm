import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicKeywordsPATCHRequest } from "./req.dto.d";

export class AuthPublicKeywords$ID$PATCHRequestDTO extends BaseDTO<AuthPublicKeywords$ID$PATCHRequest> {
	constructor(values: AuthPublicKeywords$ID$PATCHRequest) {
		super(values, AuthPublicKeywords$ID$PATCHRequestDTO.schema());
	}

	static schema() {
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
