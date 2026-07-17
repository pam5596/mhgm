export interface BaseDTOInterface {
  cookies?: Record<string,string>;
  params?: Record<string, unknown>
  query?: Record<string, unknown>
  body?: Record<string, unknown>
  socket?: Record<string, unknown>
}