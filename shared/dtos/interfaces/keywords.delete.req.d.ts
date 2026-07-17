import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface KeywordsDELETERequest {
  params: {
    id: Keyword["id"]
  }
}
