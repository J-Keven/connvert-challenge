import { Request, Response } from 'express';

import JsonPlaceholder from '../../services/JsonPlaceholder';

class ListAllUsersContrller {
  public async index(req: Request, res: Response): Promise<Response> {
    const jsonPlaceholder = new JsonPlaceholder();

    const users = await jsonPlaceholder.getUsers();

    return res.status(200).json(users);
  }
}

export default ListAllUsersContrller;
