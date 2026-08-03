import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicUsersSettingsGETResponse } from "./interfaces/auth_public_users_settings.get.res.dto";

export class AuthPublicUsersSettingsGETResponseDTO extends BaseDTO<AuthPublicUsersSettingsGETResponse> {
	constructor(values: AuthPublicUsersSettingsGETResponse) {
		super(values, AuthPublicUsersSettingsGETResponseDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			body: z.strictObject({
				setting: z.strictObject({
					quest_limit: z.number(),
				}),
				keywords: z.array(
					z.strictObject({
						id: z.number(),
						keyword: z.string(),
						action: z.string(),
					}),
				),
			}),
		});
	}
}
