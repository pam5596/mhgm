import type z from "zod";
import { ParameterMissingError } from "../errors/parameter_missing"
import type { BaseDTOInterface } from "./interfaces/_base"

export abstract class BaseDTO<I extends BaseDTOInterface>{
  readonly values: I

  constructor(values: I, schema: z.ZodType<I>) {
    const parsed_values = schema.safeParse(values)
    
    if (!parsed_values.success) throw new ParameterMissingError<I>(
      parsed_values.error,
      this.constructor.name,
      values
    )

    this.values = parsed_values.data
  }

  
}