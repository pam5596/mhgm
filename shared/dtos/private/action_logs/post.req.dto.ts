import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { PrivateActionlogsPOSTRequest } from "./post.req.dto.d";

export class PrivateActionlogsPOSTRequestDTO extends BaseDTO<PrivateActionlogsPOSTRequest> {
	constructor(values: PrivateActionlogsPOSTRequest) {
		super(values, PrivateActionlogsPOSTRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				message: z.string(),
				user_id: z.number(),
				broadcast_id: z.number(),
				keyword_id: z.number(),
			}),
		});
	}
}
