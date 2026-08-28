import { zocker } from "zocker"
import { BaseModel } from "../../shared/models/_base";
import z from "zod";

export class Factory {
	static create<Model extends BaseModel<any>>(
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