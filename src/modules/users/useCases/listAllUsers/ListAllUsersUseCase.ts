/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    const isAdminUser = user.admin;
    if(!user) {
      throw new Error("User doesn't exists!");
    }
    if(!isAdminUser) {
      throw new Error("User doesn't have permissions!");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
