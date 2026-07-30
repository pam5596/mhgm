import { describe, expect, it } from "vitest";
import { AuthPublicYoutubeBroadcastsGETRequestDTO } from "../../../shared/dtos";

describe("AuthPublicYoutubeBroadcastsGETRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			access_token: "string",
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthPublicYoutubeBroadcastsGETRequestDTO(values)).not.toThrow();
	});
});
