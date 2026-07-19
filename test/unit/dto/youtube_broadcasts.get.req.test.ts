import { describe, expect, it } from "vitest";
import { YoutubeBroadcastsGETRequestDTO } from "../../../shared/dtos/youtube_broadcasts.get.req.dto";

describe("YoutubeBroadcastsGETRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			secure: {
				access_token: "string",
			},
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new YoutubeBroadcastsGETRequestDTO(values)).not.toThrow();
	});
});
