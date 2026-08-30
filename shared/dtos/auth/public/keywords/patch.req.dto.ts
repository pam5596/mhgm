import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicKeywordsPATCHRequest } from "./patch.req.dto.d";

export class AuthPublicKeywordsPATCHRequestDTO extends BaseDTO<AuthPublicKeywordsPATCHRequest> {
	constructor(values: AuthPublicKeywordsPATCHRequest) {
		super(values, AuthPublicKeywordsPATCHRequestDTO.schema());
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
