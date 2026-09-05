export class AuthPublicUsersEventMessagesPATCHService 
  implements BaseService<AuthPublicUsersEventMessagesPATCHRequestDTO, void>
{
  constructor(private eventMessageRepository: EventMessageRepository) {}

  async execute(request: AuthPublicUsersEventMessagesPATCHRequestDTO) {
    const { user_id } = request.values.sessions;
    const event_mesage = await this.eventMessageRepository.findByUserId(user_id)
    if (!event_mesage) 
      throw new NotFoundError(this.constructor.name, request.values)

    await this.eventMessageRepository.update(
      event_mesage.update({
        ...event_mesage.values,
        ...request.values.body
      })
    )
  }
}