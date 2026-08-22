import { describe, expect, it } from "vitest";
import { BroadcastModel } from "../../../shared/models/broadcast.model";

describe("BroadcastModelの単体テスト", () => {
	const values = {
		id: 1,
		title: "string",
		thumbnail: "https://example.com",
		stream_id: "stringstrin",
		begin_at: new Date(),
		end_at: null,
		user_id: 1,
	};

	it("モデルが作成できる", () => {
		expect(() => new BroadcastModel(values)).not.toThrow();

		const { id, ...require_params } = values;
		expect(() => new BroadcastModel(require_params)).not.toThrow();
	});

	it("titleでエラーになる", () => {
		expect(() => new BroadcastModel({ ...values, title: "" })).toThrow();
	});

	it("thumbnailでエラーになる", () => {
		expect(
			() => new BroadcastModel({ ...values, thumbnail: "http" }),
		).toThrow();
	});

	it("stream_idでエラーになる", () => {
		expect(() => new BroadcastModel({ ...values, stream_id: "" })).toThrow();
	});
});
