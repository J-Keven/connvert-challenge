import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListAllUserInDebtService from '../../../services/ListAllUserInDebtService';

class ListAllUserInDebtController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listAllUserInDebtService = container.resolve(
      ListAllUserInDebtService,
    );

    const usersInDebts = await listAllUserInDebtService.execute();

    return res.status(200).json(usersInDebts);
  }
}

export default ListAllUserInDebtController;
