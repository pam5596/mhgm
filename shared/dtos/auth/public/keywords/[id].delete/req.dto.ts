import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicKeywords$ID$DELETERequest } from "./req.dto.d";

export class AuthPublicKeywords$ID$DELETERequestDTO extends BaseDTO<AuthPublicKeywords$ID$DELETERequest> {
	constructor(values: AuthPublicKeywords$ID$DELETERequest) {
		super(values, AuthPublicKeywords$ID$DELETERequestDTO.schema());
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
