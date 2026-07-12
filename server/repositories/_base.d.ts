export interface BaseRepository<Inter, Model extends BaseModel<Inter>> {
  upsert?: (data: Model) => Promise<Model>
  all?: () => Promise<Model[]>
  where?: (where: unknown) => Promise<Model[]>
  find?: (id: number) => Promise<Model | null>
  update?: (data: Model) => Promise<void>
  destroy?: (id: number) => Promise<void>
}