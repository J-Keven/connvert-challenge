import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateDebtsService from '../../../services/CreateDebtsService';

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
}

export default DebtsController;
