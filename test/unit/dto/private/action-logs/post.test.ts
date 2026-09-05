import { zocker } from "zocker";

describe("PrivateActionlogsPOSTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(PrivateActionlogsPOSTRequestDTO.schema()).generate();

		expect(() => new PrivateActionlogsPOSTRequestDTO(mock)).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		const mock = zocker(PrivateActionlogsPOSTResponseDTO.schema()).generate();

		expect(() => new PrivateActionlogsPOSTResponseDTO(mock)).not.toThrow();
	});
});
