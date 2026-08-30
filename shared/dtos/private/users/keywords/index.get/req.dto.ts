import z from "zod"
import { BaseDTO } from "~~/shared/dtos/_base";
import type { PrivateUsersKeywordsGETRequest } from "./req.dto.d"

export class PrivateUsersKeywordsGETRequestDTO extends BaseDTO<PrivateUsersKeywordsGETRequest> {
  constructor(values: PrivateUsersKeywordsGETRequest) {
    super(values, PrivateUsersKeywordsGETRequestDTO.schema())
  }

  static schema() {
    return z.strictObject({
      params: z.strictObject({
        user_id: z.number()
      })
    })
  }
}