import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicUsersSettingsGETResponse } from "./interfaces/auth_public_users_settings.get.res.dto";

export class AuthPublicUsersSettingsGETResponseDTO extends BaseDTO<AuthPublicUsersSettingsGETResponse> {
	constructor(values: AuthPublicUsersSettingsGETResponse) {
		super(values, AuthPublicUsersSettingsGETResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				setting: z.strictObject({
					quest_limit: z.number(),
					player_limit: z.number()
				}),
				keywords: z.array(
					z.strictObject({
						id: z.bigint().min(1n),
						keyword: z.string(),
						action: z.string(),
					}),
				),
			}),
		});
	}
}
