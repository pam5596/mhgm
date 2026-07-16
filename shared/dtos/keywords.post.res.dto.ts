import z from "zod";
import { BaseDTO } from "./_base";
import type { KeywordsPOSTResponse } from "./interfaces/keywords.post.res"

export class KeywordsPOSTResponseDTO extends BaseDTO<KeywordsPOSTResponse> {
  constructor(values: KeywordsPOSTResponse) {
    super(values, KeywordsPOSTResponseDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      body: z.strictObject({
        id: z.number()
      })
    })
  }
} 