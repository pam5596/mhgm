import { describe, expect, it } from "vitest";
import { AuthPublicYoutubeBroadcastsGETResponseDTO } from "../../../shared/dtos";

describe("AuthPublicYoutubeBroadcastsGETResponseDTOの単体テスト", () => {
	const values = {
		body: {
			title: "title",
			thumbnail: "https://thumbnail.com",
			stream_id: "stream_id_1",
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthPublicYoutubeBroadcastsGETResponseDTO(values)).not.toThrow();
	});
});
