import { describe, expect, it } from "vitest";
import { AuthPublicWebhooksMemberPOSTRequestDTO } from "../../../shared/dtos/auth_public_webhooks_member.post.req.dto";
import { zocker } from "zocker";

describe("AuthPublicWebhooksMemberPOSTRequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicWebhooksMemberPOSTRequestDTO.schema()).generate();

		expect(() => new AuthPublicWebhooksMemberPOSTRequestDTO(mock)).not.toThrow();
	});
});
