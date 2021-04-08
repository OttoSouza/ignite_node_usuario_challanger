import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.params.user_id as string;

      const turnUserAnAdmin = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(201).json(turnUserAnAdmin);
    } catch (error) {
      return response.status(404).json({ error: "User does not exist" });
    }
  }
}

export { TurnUserAdminController };
