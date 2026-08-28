import type { z } from "zod";
import { ValidateError } from "../errors/validation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class BaseModel<I extends Record<string, any>> {
	protected _values: I
	private _schema: z.ZodType<I>

	constructor(values: I, schema: z.ZodType<I>) {
		const parsed_values = schema.safeParse(values, { reportInput: true });

		if (!parsed_values.success) throw new ValidateError<I>(
				parsed_values.error,
				this.constructor.name,
				values,
			);
		this._values = parsed_values.data
		this._schema = schema
	}

	get values() {
		return this._values
	}

	update(new_values: I) {
		const parsed_values = this._schema.safeParse(new_values, { reportInput: true });

		if (!parsed_values.success) throw new ValidateError<I>(
				parsed_values.error,
				this.constructor.name,
				new_values,
			);

		this._values = new_values
		return this
	}


	toIgnoreUndefinedObject() {
		return Object.fromEntries(
			Object.entries(this._values).filter(([_, v]) => v != undefined),
		) as {
			[K in keyof I as undefined extends I[K] ? never : K]: I[K];
		};
	}
}
