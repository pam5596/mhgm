import { BaseError } from "./base";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client.js"

export class CRUDFailedError extends BaseError {
  constructor(
    error: PrismaClientKnownRequestError,
    detail: string,
    instance: string,
    args: unknown 
  ) {
    super(
      500,
      detail,
      error.message,
      instance,
      error.stack,
      args
    )
  }
}