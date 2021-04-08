import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.headers.user_id as string;
      const getAllUsers = this.listAllUsersUseCase.execute({
        user_id,
      });

      return response.json(getAllUsers);
    } catch (error) {
      return response.status(400).json({ error: "User not an admin" });
    }
  }
}

export { ListAllUsersController };
