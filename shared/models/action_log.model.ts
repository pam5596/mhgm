import z from "zod";
import { BaseModel } from "./_base";
import type { ActionLog } from "./interfaces/action_log.interface";

export class ActionLogModel extends BaseModel<ActionLog> {
	constructor(action_log: ActionLog) {
		super(action_log, ActionLogModel.schema());
	}

	private static schema() {
		return z.strictObject({
			id: z.int().optional(),
			message: z.string().min(1).max(200),
			created_at: z.date().optional(),
			user_id: z.int(),
			broadcast_id: z.int(),
			keyword_id: z.int(),
		});
	}
}
