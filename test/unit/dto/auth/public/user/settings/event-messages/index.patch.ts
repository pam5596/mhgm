import { zocker } from "zocker";

describe("AuthPublicUsersEventMessagesPATCHの単体テスト", () => {
  it("RequestDTOが作成できる", () => {
    const mock = zocker(AuthPublicUsersEventMessagesPATCH.schema()).generate();

    expect(() => new AuthPublicUsersEventMessagesPATCH(mock)).not.toThrow();
  });
});