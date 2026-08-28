import { describe, expect, it } from "vitest";
import { AuthPublicBroadcastsPUTRequestDTO } from "../../../shared/dtos/auth_public_broadcasts.put.req.dto";
import { AuthPublicBroadcastsPUTResponseDTO } from "../../../shared/dtos/auth_public_broadcasts.put.res.dto";

describe("AuthPublicBroadcastsPUTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new AuthPublicBroadcastsPUTRequestDTO({
			sessions: {
				user_id: 1,
			},
			body: {
				title: "title",
				thumbnail: "https://thumbnail.com",
				stream_id: "stream_id_1",
				live_chat_id: "live_chat_id",
				end_at: new Date().toISOString()
			},
		})).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		expect(() => new AuthPublicBroadcastsPUTResponseDTO({
			body: {
				id: 1
			}
		})).not.toThrow();
	});
});
