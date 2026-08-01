import { describe, expect, it } from "vitest";
import { PrivateActionlogsPOSTRequestDTO } from "../../../shared/dtos/private_action_logs.post.req.dto";
import { PrivateActionlogsPOSTResponseDTO } from "../../../shared/dtos/private_action_logs.post.res.dto";

describe("PrivateActionlogsPOSTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new PrivateActionlogsPOSTRequestDTO({
			body: {
				message: "string",
				user_id: 1,
				broadcast_id: 1,
				keyword_id: 1,
			},
		})).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		expect(() => new PrivateActionlogsPOSTResponseDTO({
			body: {
				id: 1,
			},
		})).not.toThrow();
	});
});
