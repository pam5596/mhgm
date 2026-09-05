import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicUsersSettingsGETResponse } from "./res.dto.d";

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
				event_message: z.strictObject({
					id: z.number(),
					entry_as_joiner: z.string().nullable(),
					entry_as_waiter: z.string().nullable(),
					duplicate_as_joiner: z.string().nullable(),
					duplicate_as_waiter: z.string().nullable(),
					cancel: z.string().nullable()
				})
			}),
		});
	}
}
