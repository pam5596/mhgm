import { describe, expect, it } from "vitest";
import { AuthPublicWebhooksMemberPOSTRequestDTO } from "../../../shared/dtos/auth_public_webhooks_member.post.req.dto";

describe("AuthPublicWebhooksMemberPOSTRequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new AuthPublicWebhooksMemberPOSTRequestDTO({
			sessions: {
				channel_id: "string",
			},
			body: {
				users: [
					{
						channel_id: "string",
						name: "string",
						avatar: "string",
						status: "string",
						join_quests: 1,
						wait_quests: 1,
					},
				],
			},
		})).not.toThrow();
	});
});
