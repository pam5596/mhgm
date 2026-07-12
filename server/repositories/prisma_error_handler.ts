import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client.js"

export function prismaErrorHandler(detail: string) {
  return function (
    query_method: Function,
    context: ClassMemberDecoratorContext,
  ) {
    return async function (this: any, ...args: any[]) {
      try {
        return await query_method.apply(this, args)
      } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
          throw new CRUDFailedError(
            e,
            detail,
            this.constructor.name,
            args
          )
        } else {
          throw new UnknownError(
            e,
            this.constructor.name,
            args
          )
        }
      }
    }
  }
}