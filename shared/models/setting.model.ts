import z from "zod";
import { BaseModel } from "./_base";
import type { Setting } from "./interfaces/setting.interface";

export class SettingModel extends BaseModel<Setting> {
	constructor(setting: Setting) {
		super(setting, SettingModel.schema());
	}

	static schema() {
		return z.strictObject({
			user_id: z.int().min(1),
			player_limit: z.int().min(1).max(3),
			quest_limit: z.int().min(1),
			updated_at: z.date().optional(),
		});
	}

}
