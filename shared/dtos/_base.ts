import { z } from "zod";
import { ParameterMissingError } from "../errors/parameter_missing";

export abstract class BaseDTO<I> {
	readonly values: I;

	constructor(values: I, schema: z.ZodType<I>) {
		const parsed_values = schema.safeParse(values);

		if (!parsed_values.success)
			throw new ParameterMissingError<I>(
				z.prettifyError(parsed_values.error),
				this.constructor.name,
				parsed_values.error.stack,
				values,
			);

		this.values = parsed_values.data;
	}
}
