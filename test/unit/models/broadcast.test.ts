import { describe, expect, it } from "vitest";
import { BroadcastModel } from "../../../shared/models/broadcast.model";
import { zocker } from "zocker"

describe("BroadcastModelの単体テスト", () => {
	const mock = zocker(BroadcastModel.schema()).generate()

	it("モデルが作成できる", () => {
		expect(() => new BroadcastModel(mock)).not.toThrow();

		const { id, ...require_params } = mock;
		expect(() => new BroadcastModel(require_params)).not.toThrow();
	});
});
