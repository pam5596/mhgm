import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicKeywordsDELETERequest } from "./delete.req.dto.d";

export class AuthPublicKeywordsDELETERequestDTO extends BaseDTO<AuthPublicKeywordsDELETERequest> {
	constructor(values: AuthPublicKeywordsDELETERequest) {
		super(values, AuthPublicKeywordsDELETERequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.number(),
			}),
			params: z.strictObject({
				id: z.coerce.number(),
			}),
		});
	}
}
