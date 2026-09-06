import { describe, expect, it } from "vitest";
import { EventMessageModel } from "../../../shared/models/event_message.model";
import { zocker } from "zocker"

describe("EventMessageの単体テスト", () => {
	const mock = zocker(EventMessageModel.schema()).generate()

	it("モデルが作成できる", () => {
		expect(() => new EventMessageModel(mock)).not.toThrow();

		const { updated_at, ...require_params } = mock;
		expect(() => new EventMessageModel(require_params)).not.toThrow();
	});
});
