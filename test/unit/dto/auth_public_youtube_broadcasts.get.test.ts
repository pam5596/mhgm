import { describe, expect, it } from "vitest";
import { AuthPublicYoutubeBroadcastsGETRequestDTO } from "../../../shared/dtos/auth_public_youtube_broadcasts.get.req.dto";
import { AuthPublicYoutubeBroadcastsGETResponseDTO } from "../../../shared/dtos/auth_public_youtube_broadcasts.get.res.dto";

describe("AuthPublicYoutubeBroadcastsGETの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new AuthPublicYoutubeBroadcastsGETRequestDTO({
			sessions: {
				access_token: "string",
			},
		})).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		expect(() => new AuthPublicYoutubeBroadcastsGETResponseDTO({
			body: {
				stream_id: "stream_id_1",
				title: "title",
				thumbnail: "https://thumbnail.com",
			},
		})).not.toThrow();
	});
});
