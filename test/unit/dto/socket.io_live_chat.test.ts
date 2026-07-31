import { describe, expect, it } from "vitest";
import { SocketIOLiveChatAuthDTO } from "../../../shared/dtos/socker.io_live_chat.auth.dto";

describe("SocketIOLiveChatAuthDTOの単体テスト", () => {
	it("AuthDTOが作成できる", () => {
		expect(() => new SocketIOLiveChatAuthDTO({
			channel_id: "string",
			stream_id: "string",
			broadcast_id: 1,
			user_id: 1
		})).not.toThrow();
	});
});
