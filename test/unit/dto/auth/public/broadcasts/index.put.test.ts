import { zocker } from "zocker";

describe("AuthPublicBroadcastsPUTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicBroadcastsPUTRequestDTO.schema()).generate();

		expect(() => new AuthPublicBroadcastsPUTRequestDTO(mock)).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		const mock = zocker(AuthPublicBroadcastsPUTResponseDTO.schema()).generate();

		expect(() => new AuthPublicBroadcastsPUTResponseDTO(mock)).not.toThrow();
	});
});
