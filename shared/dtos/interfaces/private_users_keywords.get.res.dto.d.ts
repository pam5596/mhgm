export interface PrivateUsersKeywordsGETResponse {
  body: {
    keywords: {
      id: number,
      keyword: string,
      action: string
    }[]
  }
}