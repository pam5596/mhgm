import { describe, expect, it } from "vitest";
import { BroadcastsPUTRequestDTO } from "../../../shared/dtos/broadcasts.put.req.dto";

describe("BroadcastsPUTRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			user: {
				user_id: 1,
			},
		},
		body: {
			title: "title",
			thumbnail: "https://thumbnail.com",
			stream_id: "stream_id_1",
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new BroadcastsPUTRequestDTO(values)).not.toThrow();
	});
});
