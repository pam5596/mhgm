import z from "zod";
import { ActionEnum } from "../enums/action.enum";
import { BaseModel } from "./_base";
import type { Keyword } from "./interfaces/keyword.interface";

export class KeywordModel extends BaseModel<Keyword> implements Keyword {
	readonly id?: number;
	readonly keyword!: string;
	readonly action!: (typeof ActionEnum)[keyof typeof ActionEnum];
	readonly created_at?: Date;
	readonly user_id!: number;

	constructor(keyword: Keyword) {
		super(keyword, KeywordModel.schema());
		Object.assign(this, keyword);
	}

	private static schema() {
		return z.strictObject({
			id: z.int().optional(),
			keyword: z.string().min(1).max(10),
			action: z.enum(ActionEnum),
			created_at: z.date().optional(),
			user_id: z.int(),
		});
	}

	updateKeyword(keyword: string) {
		return new KeywordModel({
			id: this.id,
			keyword,
			action: this.action,
			created_at: this.created_at,
			user_id: this.user_id,
		});
	}

	override toObject(): Keyword {
		return {
			id: this.id,
			keyword: this.keyword,
			action: this.action,
			created_at: this.created_at,
			user_id: this.user_id,
		};
	}
}
