import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { PrivateUsersPUTRequest } from "./put.req.dto.d";

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
