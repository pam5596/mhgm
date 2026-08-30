import z from "zod"
import { BaseDTO } from "./_base"
import type { PrivateUsersKeywordsGETResponse } from "./interfaces/private_users_keywords.get.res.dto"

export class PrivateUsersKeywordsGETResponseDTO extends BaseDTO<PrivateUsersKeywordsGETResponse> {
  constructor(values: PrivateUsersKeywordsGETResponse) {
    super(values, PrivateUsersKeywordsGETResponseDTO.schema())
  }

  static schema() {
    return z.strictObject({
      body: z.strictObject({
        keywords: z.array(
          z.strictObject({
            id: z.number(),
            keyword: z.string(),
            action: z.string()
          })
        )
      })
    })
  }
}