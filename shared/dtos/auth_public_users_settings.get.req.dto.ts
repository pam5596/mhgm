import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicUsersSettingsGETRequest } from "./interfaces/auth_public_users_settings.get.req.dto";

export class AuthPublicUsersSettingsGETRequestDTO extends BaseDTO<AuthPublicUsersSettingsGETRequest> {
	constructor(values: AuthPublicUsersSettingsGETRequest) {
		super(values, AuthPublicUsersSettingsGETRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.bigint().min(1n),
			}),
		});
	}
}
