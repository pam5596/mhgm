import z from "zod";
import type { AuthPublicWebhooksMemberPOSTRequest } from "./member.post.req";
import { BaseDTO } from "../../../_base";

export class AuthPublicWebhooksMemberPOSTRequestDTO extends BaseDTO<AuthPublicWebhooksMemberPOSTRequest> {
	constructor(values: AuthPublicWebhooksMemberPOSTRequest) {
		super(values, AuthPublicWebhooksMemberPOSTRequestDTO.schema());
	}

	private static schema() {
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
