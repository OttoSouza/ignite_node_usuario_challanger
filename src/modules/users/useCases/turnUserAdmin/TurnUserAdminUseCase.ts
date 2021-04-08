import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const hasUser = this.usersRepository.findById(user_id);

    if (!hasUser) {
      throw new Error("Cannot turn this user admin because it is not exist");
    }

    const userUpdated = this.usersRepository.turnAdmin(hasUser);
    return userUpdated;
  }
}

export { TurnUserAdminUseCase };
