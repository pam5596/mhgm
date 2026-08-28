import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicUsersSettingsPATCHRequest } from "./interfaces/auth_public_users_settings.patch.req.dto";

export class AuthPublicUsersSettingsPATCHRequestDTO extends BaseDTO<AuthPublicUsersSettingsPATCHRequest> {
	constructor(values: AuthPublicUsersSettingsPATCHRequest) {
		super(values, AuthPublicUsersSettingsPATCHRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.bigint().min(1n),
			}),
			body: z.strictObject({
				quest_limit: z.number(),
				player_limit: z.number()
			}),
		});
	}
}
