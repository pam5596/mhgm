import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicUsersSettingsGETResponse } from "./get.res.dto.d";

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
						id: z.number(),
						keyword: z.string(),
						action: z.string(),
					}),
				),
			}),
		});
	}
}
