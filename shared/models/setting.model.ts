import z from "zod";
import { BaseModel } from "./_base";
import type { Setting } from "./interfaces/setting.interface";

export class SettingModel extends BaseModel<Setting> implements Setting {
  readonly user_id!: number;
  readonly quest_limit!: number;
  readonly updated_at?: Date;

  constructor(setting: Setting) {
    super(setting, SettingModel.schema())
    Object.assign(this, setting)
  }

  private static schema() {
    return z.strictObject({
      user_id: z.int(),
      quest_limit: z.int().min(1),
      updated_at: z.date().optional()
    })
  }

  update(new_values: Omit<Setting,"user_id">) {
      return new SettingModel({
        ...this.toObject(),
        ...new_values
      })
    }

  override toObject(): Setting {
    return {
      user_id: this.user_id,
      quest_limit: this.quest_limit,
      updated_at: this.updated_at
    }
  }
}