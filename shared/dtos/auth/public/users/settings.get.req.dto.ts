import z from "zod";
import { BaseDTO } from "../../../_base";
import type { AuthPublicUsersSettingsGETRequest } from "./settings.get.req";

export class AuthPublicUsersSettingsGETRequestDTO extends BaseDTO<AuthPublicUsersSettingsGETRequest> {
	constructor(values: AuthPublicUsersSettingsGETRequest) {
		super(values, AuthPublicUsersSettingsGETRequestDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				user_id: z.number(),
			}),
		});
	}

	get session() {
		return this.values.sessions;
	}
}
