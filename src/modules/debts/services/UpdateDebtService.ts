import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/error/AppError';
import Debts from '../infra/typeorm/schemas/Debts';
import IDebtsRepository from '../repositories/IDebtsRepository';

interface IRequest {
  debt_id: string;
  description?: string;
  value?: number;
}

@injectable()
class UpdateDebtService {
  private debtsRepository: IDebtsRepository;

  constructor(
    @inject('DebtsRepository')
    debtsRepository: IDebtsRepository,
  ) {
    this.debtsRepository = debtsRepository;
  }

  public async execute({
    debt_id,
    value,
    description,
  }: IRequest): Promise<Debts> {
    const debt = await this.debtsRepository.findById(debt_id);

    if (!debt) {
      throw new AppError('Debt not found, see debts list from user', 400);
    }

    if (value) {
      debt.value = value;
    }

    if (description) {
      debt.description = description;
    }

    console.log(debt);
    await this.debtsRepository.save(debt);
    return debt;
  }
}

export default UpdateDebtService;
