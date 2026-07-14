import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client"
import { BaseModel } from "../../shared/models/_base"
import type { PrismaORMClient } from "../clients/prisma"
import { CRUDFailedError } from "../../shared/errors/crud_failed"
import { UnknownError } from "../../shared/errors/unknown"

export abstract class BaseRepository<Model extends BaseModel<any>> {
  readonly client: PrismaORMClient

  constructor(
    client: PrismaORMClient
  ){
    this.client = client
  }

  protected async prismaErrorHandler<Response = unknown>(
    detail: string,
    query_method?: () => Promise<Response> | undefined,
  ) {
    try {
      if (!query_method) return undefined
      return await query_method()
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        throw new CRUDFailedError(
          e,
          detail,
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


  // [!] innerメソッドは必ずアロー関数で記述すること
  innerUpsert?(data: Model): Promise<Model>
  async upsert(data: Model) {
    return await this.prismaErrorHandler(
      'errors.crud.create',
      () => this.innerUpsert && this.innerUpsert(data)
    )
  }

  innnerAll?(): Promise<Model[]>
  async all() {
    return await this.prismaErrorHandler(
      'errors.crud.read',
      () => this.innnerAll && this.innnerAll()
    )
  }

  innerUpdate?(data: Model): Promise<void>
  async update(data: Model) {
    return await this.prismaErrorHandler(
      'errors.crud.update',
      () => this.innerUpdate && this.innerUpdate(data)
    )
  }
  
  innerDestroy?(id: number): Promise<void>
  async destroy(id: number) {
    return await this.prismaErrorHandler(
      'errors.crud.delete',
      () => this.innerDestroy && this.innerDestroy(id)
    )
  }
}