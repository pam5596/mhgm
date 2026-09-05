import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicUsersSettingsPATCHRequest } from "./req.dto.d";

export class AuthPublicUsersSettingsPATCHRequestDTO extends BaseDTO<AuthPublicUsersSettingsPATCHRequest> {
	constructor(values: AuthPublicUsersSettingsPATCHRequest) {
		super(values, AuthPublicUsersSettingsPATCHRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.number(),
			}),
			body: z.strictObject({
				quest_limit: z.number(),
				player_limit: z.number()
			}),
		});
	}
}
