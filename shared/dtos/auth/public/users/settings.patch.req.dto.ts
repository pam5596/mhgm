import z from "zod";
import { BaseDTO } from "../../../_base";
import type { AuthPublicUsersSettingsPATCHRequest } from "./settings.patch.req";

export class AuthPublicUsersSettingsPATCHRequestDTO extends BaseDTO<AuthPublicUsersSettingsPATCHRequest> {
	constructor(values: AuthPublicUsersSettingsPATCHRequest) {
		super(values, AuthPublicUsersSettingsPATCHRequestDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.number(),
			}),
			body: z.strictObject({
				quest_limit: z.number(),
			}),
		});
	}
}
