import z from "zod";
import { BaseDTO } from "./_base";
import type { KeywordsDELETERequest } from "./interfaces/keywords.delete.req"

export class KeywordsDELETERequestDTO extends BaseDTO<KeywordsDELETERequest> {
  constructor(values: KeywordsDELETERequest) {
    super(values, KeywordsDELETERequestDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        user: z.strictObject({
          user_id: z.number()
        })
      }),
      params: z.strictObject({
        id: z.coerce.number()
      }),
    })
  }
} 