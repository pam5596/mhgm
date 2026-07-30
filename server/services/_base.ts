import type { BaseDTO } from "~~/shared/dtos/_base";

export interface BaseService<
	Req extends BaseDTO<any>,
	// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Res extends BaseDTO<any> | void,
> {
	execute: (request: Req, ...args: never[]) => Promise<Res>;
}
