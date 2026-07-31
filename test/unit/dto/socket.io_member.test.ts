import { describe, expect, it } from "vitest";
import { SocketIOMemberEmitDTO } from "../../../shared/dtos/socker.io_member.emit.dto";

describe("SocketIOMemberEmitDTOの単体テスト", () => {
	it("EmitDTOが作成できる", () => {
		expect(() => new SocketIOMemberEmitDTO({
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
		})).not.toThrow();
	});
});
