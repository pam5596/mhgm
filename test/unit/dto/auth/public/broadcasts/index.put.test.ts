import { zocker } from "zocker";

describe("AuthPublicBroadcastsPATCHの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicBroadcastsPATCHRequestDTO.schema()).generate();

		expect(() => new AuthPublicBroadcastsPATCHRequestDTO(mock)).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		const mock = zocker(AuthPublicBroadcastsPATCHResponseDTO.schema()).generate();

		expect(() => new AuthPublicBroadcastsPATCHResponseDTO(mock)).not.toThrow();
	});
});
