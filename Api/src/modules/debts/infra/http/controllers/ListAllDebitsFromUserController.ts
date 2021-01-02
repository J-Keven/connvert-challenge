import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListAllDebtsFromUserService from '../../../services/ListAllDebtsFromUserService';

class ListAllDebitsFromUserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.body;
    const listAllDebtsFromUser = container.resolve(ListAllDebtsFromUserService);

    const debts = await listAllDebtsFromUser.execute(user_id);

    return res.status(200).json(debts);
  }
}

export default ListAllDebitsFromUserController;
