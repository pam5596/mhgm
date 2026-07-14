import type { ZodObject } from 'zod'
import { ValidateError } from '../errors/validation'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class BaseModel<I extends Record<string, any>> {
  constructor(values: I, schema: ZodObject) {
    const parsed_values = schema.safeParse(values, { reportInput: true })

    if (!parsed_values.success) throw new ValidateError(
      parsed_values.error.issues[0]!,
      this.constructor.name,
      parsed_values.error.stack
    )
  }

  abstract toObject(): I

  toIgnoreUndefinedObject() {
    return Object.fromEntries(
      Object.entries(this.toObject()).filter(([_, v]) => v != undefined)
    ) as {
      [K in keyof I as undefined extends I[K] ? never : K]: I[K]
    }
  }
} 