import { describe, expect, it } from "vitest";
import { PrivateActionlogsPOSTRequestDTO } from "../../../shared/dtos/private_action_logs.post.req.dto";
import { PrivateActionlogsPOSTResponseDTO } from "../../../shared/dtos/private_action_logs.post.res.dto";
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
