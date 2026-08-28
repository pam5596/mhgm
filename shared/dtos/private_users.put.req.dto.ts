import z from "zod";
import { BaseDTO } from "./_base";
import type { PrivateUsersPUTRequest } from "./interfaces/private_users.put.req.dto";

export class PrivateUsersPUTRequestDTO extends BaseDTO<PrivateUsersPUTRequest> {
	constructor(values: PrivateUsersPUTRequest) {
		super(values, PrivateUsersPUTRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				channel_id: z.string(),
				name: z.string(),
				avatar: z.string(),
			}),
		});
	}
}
