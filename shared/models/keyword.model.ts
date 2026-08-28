import z from "zod";
import { ActionEnum } from "../enums/action.enum";
import { BaseModel } from "./_base";
import type { Keyword } from "./interfaces/keyword.interface";

export class KeywordModel extends BaseModel<Keyword> {
	constructor(keyword: Keyword) {
		super(keyword, KeywordModel.schema());
	}

	static schema() {
		return z.strictObject({
			id: z.int().optional(),
			keyword: z.string().min(1).max(10),
			action: z.enum(ActionEnum),
			created_at: z.date().optional(),
			user_id: z.int(),
		});
	}
}
