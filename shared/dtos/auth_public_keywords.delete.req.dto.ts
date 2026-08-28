import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicKeywordsDELETERequest } from "./interfaces/auth_public_keywords.delete.req.dto";

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
