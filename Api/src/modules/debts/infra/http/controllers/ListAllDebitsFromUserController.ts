import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListAllDebtsFromUserService from '../../../services/ListAllDebtsFromUserService';

class ListAllDebitsFromUserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const listAllDebtsFromUser = container.resolve(ListAllDebtsFromUserService);

    const debts = await listAllDebtsFromUser.execute(Number(id));

    return res.status(200).json(debts);
  }
}

export default ListAllDebitsFromUserController;
