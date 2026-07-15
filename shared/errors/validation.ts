import { BaseError } from "./base";
import type { $ZodIssue } from "zod/v4/core";

export class ValidateError extends BaseError {
  constructor(
    issue: $ZodIssue,
    instance: string,
    stack?: string 
  ) {
    super(
      422,
      `errors.validate.invalid_${issue.path}`,
      issue.message,
      instance,
      stack,
      issue.input
    )
  }
}