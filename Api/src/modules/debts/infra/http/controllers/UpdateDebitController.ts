import { container } from 'tsyringe';
import { Request, Response } from 'express';
import UpdateDebtService from '../../../services/UpdateDebtService';

class UpdateDebitController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { debt_id } = req.params;
    const { description, value } = req.body;
    const updateDebtService = container.resolve(UpdateDebtService);

    const debts = await updateDebtService.execute({
      debt_id,
      description,
      value,
    });

    return res.status(201).json(debts);
  }
}

export default UpdateDebitController;
