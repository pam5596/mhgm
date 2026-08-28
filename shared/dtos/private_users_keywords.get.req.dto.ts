import z from "zod"
import { BaseDTO } from "./_base"
import type { PrivateUsersKeywordsGETRequest } from "./interfaces/private_users_keywords.get.req.dto"

export class PrivateUsersKeywordsGETRequestDTO extends BaseDTO<PrivateUsersKeywordsGETRequest> {
  constructor(values: PrivateUsersKeywordsGETRequest) {
    super(values, PrivateUsersKeywordsGETRequestDTO.schema())
  }

  static schema() {
    return z.strictObject({
      params: z.strictObject({
        user_id: z.bigint().min(1n)
      })
    })
  }
}