export class AuthPublicKeywordsPOSTService
	implements BaseService<AuthPublicKeywordsPOSTRequestDTO, AuthPublicKeywordsPOSTResponseDTO>
{
	constructor(private keywordRepository: KeywordRepository) {}

	async execute(request: AuthPublicKeywordsPOSTRequestDTO) {
		const { user_id } = request.values.sessions;
		const keyword = await this.keywordRepository.create(
			new KeywordModel({ 
				...request.values.body, 
				user_id,
				action: request.values.body.action as Keyword["action"]
			}),
		);

		return new AuthPublicKeywordsPOSTResponseDTO({
			body: {
				id: keyword.values.id!,
			},
		});
	}
}
