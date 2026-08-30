import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";

export class AuthGoogleGETRequestDTO extends BaseDTO<AuthGoogleGETRequest> {
	constructor(values: AuthGoogleGETRequest) {
		super(values, AuthGoogleGETRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				access_token: z.string(),
			}),
		});
	}
}
