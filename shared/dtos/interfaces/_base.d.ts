export interface BaseDTOInterface {
  headers?: Record<string, string>;
  cookies?: Record<string,string>;
  paths?: Record<string, any>
  query?: Record<string, any>
  body?: Record<string, any>
}