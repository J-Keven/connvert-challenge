import { Request, Response } from 'express';

import JsonPlaceholder from '../../services/JsonPlaceholder';

class ShowUserByIdController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const jsonPlaceholder = new JsonPlaceholder();

    const user = await jsonPlaceholder.findUserById(Number(id));

    return res.status(200).json(user);
  }
}

export default ShowUserByIdController;
