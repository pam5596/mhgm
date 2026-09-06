export class AuthPublicActionlogsPOSTService
  implements BaseService<AuthPublicActionlogsPOSTRequestDTO, void>
{
  constructor(private actionLogRepository: ActionLogRepository) {}

  async execute(request: AuthPublicActionlogsPOSTRequestDTO) {
    const body = request.values.body

    await this.actionLogRepository.create(
      new ActionLogModel(body)
    )
  }
}
