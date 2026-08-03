import type { BaseDTO } from "~~/shared/dtos/_base";

export interface BaseService<
	Req extends BaseDTO<unknown>,
	// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
	Res extends BaseDTO<unknown> | void,
> {
	execute: (request: Req, ...args: never[]) => Promise<Res>;
}
