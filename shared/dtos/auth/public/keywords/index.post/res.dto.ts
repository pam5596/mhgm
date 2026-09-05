import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicKeywordsPOSTResponse } from "./post.res.dto.d";

export class AuthPublicKeywordsPOSTResponseDTO extends BaseDTO<AuthPublicKeywordsPOSTResponse> {
	constructor(values: AuthPublicKeywordsPOSTResponse) {
		super(values, AuthPublicKeywordsPOSTResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.number(),
			}),
		});
	}
}
