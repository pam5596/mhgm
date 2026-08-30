import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicUsersSettingsGETRequest } from "./get.req.dto.d";

export class AuthPublicUsersSettingsGETRequestDTO extends BaseDTO<AuthPublicUsersSettingsGETRequest> {
	constructor(values: AuthPublicUsersSettingsGETRequest) {
		super(values, AuthPublicUsersSettingsGETRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.number(),
			}),
		});
	}
}
