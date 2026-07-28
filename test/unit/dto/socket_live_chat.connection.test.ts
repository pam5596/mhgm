import { describe, expect, it } from "vitest";
import { SocketLiveChatConnectionDTO } from "../../../shared/dtos/socket_live_chat.connection";

describe("SocketLiveChatConnectionDTOの単体テスト", () => {
	const values = {
		socket_auth: {
			channel_id: "string",
			stream_id: "string",
			broadcast_id: 1,
			user_id: 1
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new SocketLiveChatConnectionDTO(values)).not.toThrow();
	});
});
