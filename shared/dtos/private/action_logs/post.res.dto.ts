import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { PrivateActionlogsPOSTResponse } from "./post.res.dto.d";

export class PrivateActionlogsPOSTResponseDTO extends BaseDTO<PrivateActionlogsPOSTResponse> {
	constructor(values: PrivateActionlogsPOSTResponse) {
		super(values, PrivateActionlogsPOSTResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.number(),
			}),
		});
	}
}
