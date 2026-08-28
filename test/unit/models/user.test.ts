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

	it("updateメソッドが値を更新できる", () => {
		const model = new UserModel(mock);

		const updated_mock = zocker(UserModel.schema()).generate()
		const updated_model = model.update(updated_mock);

		expect(updated_model.values.avatar).toBe(updated_mock.avatar);
		expect(updated_model.values.name).toBe(updated_mock.name);
	});
});
