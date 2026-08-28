import { describe, expect, it } from "vitest";
import { SettingModel } from "../../../shared/models/setting.model";
import { zocker } from "zocker"

describe("SettingModelの単体テスト", () => {
	const mock = zocker(SettingModel.schema()).generate()

	it("モデルが作成できる", () => {
		expect(() => new SettingModel(mock)).not.toThrow();

		const { updated_at, ...require_params } = mock;
		expect(() => new SettingModel(require_params)).not.toThrow();
	});

	it("モデルを更新できる", () => {
		const model = new SettingModel(mock);

		const updated_mock =zocker(SettingModel.schema()).generate()
		const updated = model.update(updated_mock)
		expect(updated.values.quest_limit).toBe(updated_mock.quest_limit);
		expect(updated.values.player_limit).toBe(updated_mock.player_limit);
	});
});
