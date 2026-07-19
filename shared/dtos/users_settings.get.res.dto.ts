import z from "zod";
import { BaseDTO } from "./_base";
import type { UsersSettingsGETResponse } from "./interfaces/users_settings.get.res";

export class UsersSettingsGETResponseDTO extends BaseDTO<UsersSettingsGETResponse> {
	constructor(values: UsersSettingsGETResponse) {
		super(values, UsersSettingsGETResponseDTO.schema());
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
