import { describe, expect, it } from "vitest";
import { AuthPublicBroadcastsPUTRequestDTO } from "../../../shared/dtos";

describe("AuthPublicBroadcastsPUTRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			user_id: 1,
		},
		body: {
			title: "title",
			thumbnail: "https://thumbnail.com",
			stream_id: "stream_id_1",
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthPublicBroadcastsPUTRequestDTO(values)).not.toThrow();
	});
});
