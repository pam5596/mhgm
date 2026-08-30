import z from "zod"
import { BaseDTO } from "~~/shared/dtos/_base";
import type { PrivateUsersKeywordsGETResponse } from "./get.res.dto.d"

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