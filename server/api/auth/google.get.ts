export default defineOAuthGoogleEventHandler({
  config: {
    scope: [
      "email", 
      "profile", 
      "https://www.googleapis.com/auth/youtube.readonly"
    ]
  },
  async onSuccess(event, result: {
    tokens: {
      access_token: string
    },
    user: {
      name: string,
      picture: string,
      email: string
    }
  }) {
    await new AuthGoogleGETService(
      googleClient,
      userRepository,
      settingRepository,
      keywordRepository
    ).execute(
      new AuthGoogleGETRequestDTO({
        sessions: { access_token: result.tokens.access_token }
      }),
      event
    )

    return sendRedirect(event, '/home')
  },
  async onError(event, error) {
    throw new UnknownError(error, 'defineOAuthGoogleEventHandler', event.toJSON())
  }
})