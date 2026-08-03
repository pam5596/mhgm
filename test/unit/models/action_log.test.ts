import { describe, expect, it } from "vitest";
import { ActionLogModel } from "../../../shared/models/action_log.model";

describe("ActionLogModelの単体テスト", () => {
	const values = {
		id: 1,
		message: "string",
		created_at: new Date(),
		user_id: 1,
		broadcast_id: 1,
		keyword_id: 1,
	};

	it("モデルが作成できる", () => {
		expect(() => new ActionLogModel(values)).not.toThrow();

		const { id, created_at, ...require_params } = values;
		expect(() => new ActionLogModel(require_params)).not.toThrow();
	});

	it("messageでエラーになる", () => {
		expect(() => new ActionLogModel({ ...values, message: "" })).toThrow();
	});
});
