import { describe, expect, it } from "vitest";
import { KeywordModel } from "../../../shared/models/keyword.model";
import { zocker } from "zocker"

describe("KeywordModelの単体テスト", () => {
	const mock = zocker(KeywordModel.schema()).generate()

	it("モデルが作成できる", () => {
		expect(() => new KeywordModel(mock)).not.toThrow();

		const { id, created_at, ...require_params } = mock;
		expect(() => new KeywordModel(require_params)).not.toThrow();
	});
});
