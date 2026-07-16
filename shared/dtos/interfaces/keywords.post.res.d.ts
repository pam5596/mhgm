import type { BaseDTOInterface } from "./_base";
import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface KeywordsPOSTResponse implements BaseDTOInterface {
  body: {
    id: Keyword["id"]
  }
}