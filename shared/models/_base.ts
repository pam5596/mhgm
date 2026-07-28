import type { z } from "zod";
import { ValidateError } from "../errors/validation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class BaseModel<I extends Record<string, any>> {
	readonly values: I

	constructor(values: I, schema: z.ZodType<I>) {
		const parsed_values = schema.safeParse(values, { reportInput: true });

		if (!parsed_values.success) throw new ValidateError<I>(
				parsed_values.error,
				this.constructor.name,
				values,
			);
		this.values = parsed_values.data
	}


	toIgnoreUndefinedObject() {
		return Object.fromEntries(
			Object.entries(this.values).filter(([_, v]) => v != undefined),
		) as {
			[K in keyof I as undefined extends I[K] ? never : K]: I[K];
		};
	}
}
