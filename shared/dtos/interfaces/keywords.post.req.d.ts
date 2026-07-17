import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface KeywordsPOSTRequest {
  body: {
    keyword: Keyword["keyword"],
    action: string
  }
}