import { zocker } from "zocker";

describe("AuthPublicWebhooksMemberPOSTRequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicWebhooksMemberPOSTRequestDTO.schema()).generate();

		expect(() => new AuthPublicWebhooksMemberPOSTRequestDTO(mock)).not.toThrow();
	});
});
