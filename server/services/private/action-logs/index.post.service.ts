export class PrivateActionlogsPOSTService
  implements BaseService<PrivateActionlogsPOSTRequestDTO, PrivateActionlogsPOSTResponseDTO>
{
  constructor(private actionLogRepository: ActionLogRepository) {}

  async execute(request: PrivateActionlogsPOSTRequestDTO) {
    const body = request.values.body

    const action_log = await this.actionLogRepository.create(
      new ActionLogModel(body)
    )

    return new PrivateActionlogsPOSTResponseDTO({
      body: { id: action_log.values.id! }
    })
  }
}
