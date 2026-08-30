import z from "zod";
import { BaseModel } from "./_base";
import type { User } from "./interfaces/user.interface";

export class UserModel extends BaseModel<User> {
	constructor(user: User) {
		super(user, UserModel.schema());
	}

	static schema() {
		return z.strictObject({
			id: z.int().min(1).max(2147483647).optional(),
			channel_id: z.string().length(24),
			name: z.string().min(1),
			avatar: z.url({ protocol: /^https?$/ }),
			created_at: z.date().optional(),
		});
	}
}
