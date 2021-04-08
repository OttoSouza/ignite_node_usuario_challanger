import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id  = request.params.user_id as string;

      const getCurrentUser = this.showUserProfileUseCase.execute({ user_id });

      return response.json(getCurrentUser);
    } catch (error) {
      return response.status(404).json({ error: "User does not exist" });
    }
  }
}

export { ShowUserProfileController };
