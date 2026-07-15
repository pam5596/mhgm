import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client"
import type { PrismaORMClient } from "../clients/prisma"
import { CRUDFailedError } from "../../shared/errors/crud_failed"
import { UnknownError } from "../../shared/errors/unknown"

export abstract class BaseRepository {
  readonly client: PrismaORMClient

  constructor(
    client: PrismaORMClient
  ){
    this.client = client
  }

  protected async prismaErrorHandler<Response = unknown>(
    crud: 'create'|'read'|'update'|'delete',
    query_method: () => Promise<Response>,
  ) {
    try {
      return await query_method()
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        throw new CRUDFailedError(
          e,
          `errors.crud.${crud}`,
          this.constructor.name,
          query_method
        )
      } else {
        throw new UnknownError(
          e,
          this.constructor.name,
          query_method
        )
      }
    }
  }
}