import z from "zod";
import { BaseDTO } from "../../../_base";
import type { AuthPublicKeywordsPOSTRequest } from "./index.post.req";

export class AuthPublicKeywordsPOSTRequestDTO extends BaseDTO<AuthPublicKeywordsPOSTRequest> {
	constructor(values: AuthPublicKeywordsPOSTRequest) {
		super(values, AuthPublicKeywordsPOSTRequestDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.number(),
			}),
			body: z.strictObject({
				keyword: z.string(),
				action: z.string(),
			}),
		});
	}
}
