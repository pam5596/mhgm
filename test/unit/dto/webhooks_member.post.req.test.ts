import { describe, expect, it } from "vitest";
import { AuthPublicWebhooksMemberPOSTRequestDTO } from "../../../shared/dtos";

describe("AuthPublicWebhooksMemberPOSTRequestDTOの単体テスト", () => {
	const values = {
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
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthPublicWebhooksMemberPOSTRequestDTO(values)).not.toThrow();
	});
});
