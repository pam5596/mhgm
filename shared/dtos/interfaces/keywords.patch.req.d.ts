import type { BaseDTOInterface } from "./_base";
import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface KeywordsPATCHRequest implements BaseDTOInterface {
  params: {
    id: Keyword["id"]
  },
  body: {
    keyword: Keyword["keyword"],
  }
}