import { zocker } from "zocker"
import type { BaseModel } from "../../shared/models/_base";
import type z from "zod";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Factory {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	static create<Model extends BaseModel<any>>(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ModelClass: { new (...args: any[]): Model, schema: () => z.ZodObject<any> },
		supply?: Partial<Model["values"]>
	) {
		const schema = ModelClass.schema()

		if (supply) {
			const generator = Object.entries(supply).reduce(
				(current, [key, value]) => current.supply(schema.shape[key], value),
				zocker(schema),
			)
			return new ModelClass(generator.generate() as never)
		} else {
			return new ModelClass(zocker(schema).generate() as never)
		}
	}
}