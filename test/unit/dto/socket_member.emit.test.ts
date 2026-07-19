import { describe, expect, it } from "vitest";
import { SocketMemberEmitDTO } from "../../../shared/dtos/socket_member.emit";

describe("SocketMemberEmitDTOの単体テスト", () => {
	const values = {
		socket: {
			users: [
				{
					channel_id: "string",
					name: "string",
					avatar: "string",
					status: "string",
					join_quests: 1,
					wait_quests: 1,
				},
			],
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new SocketMemberEmitDTO(values)).not.toThrow();
	});
});
