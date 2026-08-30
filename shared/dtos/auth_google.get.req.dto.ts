import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthGoogleGETRequest } from "./interfaces/auth_google.get.req.dto";

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
