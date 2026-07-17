import type { BaseDTOInterface } from "./_base";
import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface KeywordsPOSTRequest implements BaseDTOInterface {
  body: {
    keyword: Keyword["keyword"],
    action: string
  }
}