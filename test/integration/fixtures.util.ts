import { UserModel } from "../../shared/models/user.model"
import users_fixture from "./fixtures/user.fixtures.json"

export const users = (id: number) => {
  const user = users_fixture.find((user) => user.id === id);
  return user && new UserModel(user)
}