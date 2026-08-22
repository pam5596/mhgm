import { describe, expect, it } from "vitest";
import { PrivateUsersPUTRequestDTO } from "../../../shared/dtos/private_users.put.req.dto";
import { PrivateUsersPUTResponseDTO } from "../../../shared/dtos/private_users.put.res.dto";

describe("PrivateUsersPUTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new PrivateUsersPUTRequestDTO({
			body: {
				channel_id: "string",
				name: "string",
				avatar: "string",
			},
		})).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		expect(() => new PrivateUsersPUTResponseDTO({
			body: {
				id: 1,
			},
		})).not.toThrow();
	});
});
