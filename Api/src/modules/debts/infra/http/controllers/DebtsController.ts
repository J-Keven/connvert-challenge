import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateDebtsService from '../../../services/CreateDebtsService';
import DeleteDebtService from '../../../services/DeleteDebtService';

class DebtsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { description, user_id, value } = req.body;
    const createDebtsService = container.resolve(CreateDebtsService);

    const debts = await createDebtsService.execute({
      description,
      user_id,
      value,
    });

    return res.status(201).json(debts);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { debt_id } = req.params;

    const deleteDebtService = container.resolve(DeleteDebtService);

    await deleteDebtService.execute(debt_id);

    return res.status(204).json();
  }
}

export default DebtsController;
