import { describe, expect, it } from "vitest";
import { AuthPublicBroadcastsPUTRequestDTO } from "../../../shared/dtos/auth_public_broadcasts.put.req.dto";
import { AuthPublicBroadcastsPUTResponseDTO } from "../../../shared/dtos/auth_public_broadcasts.put.res.dto";
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
