import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface KeywordsPATCHRequest {
  params: {
    id: Keyword["id"]
  },
  body: {
    keyword: Keyword["keyword"],
  }
}