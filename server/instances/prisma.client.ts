const config = useRuntimeConfig()
export const prismaClient = new PrismaORMClient(
  config.databaseUrl,
  config.nodeEnv
)