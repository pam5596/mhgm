import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicWebhooksMemberPOSTRequest } from "./post.req.dto.d";

export class AuthPublicWebhooksMemberPOSTRequestDTO extends BaseDTO<AuthPublicWebhooksMemberPOSTRequest> {
	constructor(values: AuthPublicWebhooksMemberPOSTRequest) {
		super(values, AuthPublicWebhooksMemberPOSTRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			sessions: z.strictObject({
				channel_id: z.string(),
			}),
			body: z.strictObject({
				users: z.array(
					z.strictObject({
						channel_id: z.string(),
						name: z.string(),
						avatar: z.string(),
						status: z.string(),
						join_quests: z.number(),
						wait_quests: z.number(),
					}),
				),
			}),
		});
	}
}
