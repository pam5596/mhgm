import { describe, expect, it } from "vitest";
import { ActionLogModel } from "../../../shared/models/action_log.model";
import { zocker } from "zocker"

describe("ActionLogModelの単体テスト", () => {
	const mock = zocker(ActionLogModel.schema()).generate()

	it("モデルが作成できる", () => {
		expect(() => new ActionLogModel(mock)).not.toThrow();

		const { id, created_at, ...require_params } = mock;
		expect(() => new ActionLogModel(require_params)).not.toThrow();
	});
});
