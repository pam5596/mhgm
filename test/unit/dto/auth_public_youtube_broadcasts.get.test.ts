import { describe, expect, it } from "vitest";
import { AuthPublicYoutubeBroadcastsGETRequestDTO } from "../../../shared/dtos/auth_public_youtube_broadcasts.get.req.dto";
import { AuthPublicYoutubeBroadcastsGETResponseDTO } from "../../../shared/dtos/auth_public_youtube_broadcasts.get.res.dto";
import { zocker } from "zocker";

describe("AuthPublicYoutubeBroadcastsGETの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicYoutubeBroadcastsGETRequestDTO.schema()).generate();

		expect(() => new AuthPublicYoutubeBroadcastsGETRequestDTO(mock)).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		const mock = zocker(AuthPublicYoutubeBroadcastsGETResponseDTO.schema()).generate();

		expect(() => new AuthPublicYoutubeBroadcastsGETResponseDTO(mock)).not.toThrow();
	});
});
