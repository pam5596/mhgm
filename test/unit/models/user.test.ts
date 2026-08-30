import { describe, expect, it } from "vitest";
import { zocker } from "zocker"
import { UserModel } from "../../../shared/models/user.model";

describe("UserModelの単体テスト", () => {
	const mock = zocker(UserModel.schema()).generate()

	it("モデルが作成できる", () => {
		expect(() => new UserModel(mock)).not.toThrow();

		const { id, created_at, ...require_params } = mock;
		expect(() => new UserModel(require_params)).not.toThrow();
	});

});
