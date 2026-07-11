import { ZodObject } from 'zod'
import { ZodValidateError } from '../errors/zod'

export abstract class BaseModel<I extends Record<string, any>> {
  constructor(values: I, schema: ZodObject) {
    const parsed_values = schema.safeParse(values, { reportInput: true })

    if (!parsed_values.success) throw new ZodValidateError(
      parsed_values.error.issues[0]!,
      this.constructor.name,
      parsed_values.error.stack
    )
  }

  abstract toObject(): I
} 