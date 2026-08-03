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
    const t = await useTranslation(event)
    if (error instanceof BaseError) {
      setResponseStatus(event, error.status_code)
      return send(event, JSON.stringify({
        ...error.toJson(),
        message: t(error.message)
      }), 'application/json')
    } else {
      const unknown_error = new UnknownError(error, 'defineOAuthGoogleEventHandler')
      setResponseStatus(event, unknown_error.status_code)
      return send(event, JSON.stringify({
        ...unknown_error.toJson(),
        message: t(unknown_error.message)
      }), 'application/json')
    }
  }
})