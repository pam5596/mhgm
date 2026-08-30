export class AuthPublicYoutubeChatMessagesPOSTService
  implements
    BaseService<AuthPublicYoutubeChatMessagesPOSTRequestDTO, void>
{
  constructor(private googleClient: GoogleClient) {}

  async execute(request: AuthPublicYoutubeChatMessagesPOSTRequestDTO) {
    const { access_token } = request.values.sessions;
    const { live_chat_id, message } = request.values.body

    await this.googleClient
      .youtube(access_token)
      .liveChatMessages.insert({
        part: ["snippet"],
        requestBody: {
          snippet: {
            liveChatId: live_chat_id,
            type: "textMessageEvent",
            textMessageDetails: {
              messageText: message
            }
          }
        }
      })
  }
}