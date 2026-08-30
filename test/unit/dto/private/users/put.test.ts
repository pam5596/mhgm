import { zocker } from "zocker";

describe("PrivateUsersPUTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(PrivateUsersPUTRequestDTO.schema()).generate();

		expect(() => new PrivateUsersPUTRequestDTO(mock)).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		const mock = zocker(PrivateUsersPUTResponseDTO.schema()).generate();

		expect(() => new PrivateUsersPUTResponseDTO(mock)).not.toThrow();
	});
});
