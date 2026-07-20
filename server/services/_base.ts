import type { BaseDTO } from "~~/shared/dtos/_base";
import type { BaseDTOInterface } from "~~/shared/dtos/interfaces/_base";

export interface BaseService<
	Req extends BaseDTO<BaseDTOInterface>,
	// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
	Res extends BaseDTO<BaseDTOInterface> | void,
> {
	execute: (request: Req, ...args: never[]) => Promise<Res>;
}
