import z from "zod";
import { BaseDTO } from "../../../_base";
import type { AuthPublicKeywordsPOSTResponse } from "./index.post.res";

export class AuthPublicKeywordsPOSTResponseDTO extends BaseDTO<AuthPublicKeywordsPOSTResponse> {
	constructor(values: AuthPublicKeywordsPOSTResponse) {
		super(values, AuthPublicKeywordsPOSTResponseDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.number(),
			}),
		});
	}
}
