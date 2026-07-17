import type { BaseDTO } from "~~/shared/dtos/_base";
import { BaseDTOInterface } from "~~/shared/dtos/interfaces/_base";

export interface BaseService<
  Req extends BaseDTO<BaseDTOInterface>, 
  Res extends (BaseDTO<BaseDTOInterface> | void)
> {
  execute: (request: Req) => Promise<Res>
}