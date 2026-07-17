export interface BaseDTOInterface {
  cookies?: Record<string,string>;
  params?: Record<string, any>
  query?: Record<string, any>
  body?: Record<string, any>
  socket?: Record<string, any>
}