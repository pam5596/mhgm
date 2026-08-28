export interface PrivateUsersKeywordsGETResponse {
  body: {
    keywords: {
      id: bigint,
      keyword: string,
      action: string
    }[]
  }
}