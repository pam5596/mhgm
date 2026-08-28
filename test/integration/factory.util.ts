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
			const key = Object.keys(supply)[0] as keyof typeof schema.shape
			return new ModelClass(zocker(schema).supply(
				schema.shape[key], supply[key as string]
			).generate() as never)
		} else {
			return new ModelClass(zocker(schema).generate() as never)
		}
	}
}