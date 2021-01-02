import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/error/AppError';
import IDebtsRepository from '../repositories/IDebtsRepository';

@injectable()
class DeleteDebtService {
  private debtsRepository: IDebtsRepository;

  constructor(
    @inject('DebtsRepository')
    debtsRepository: IDebtsRepository,
  ) {
    this.debtsRepository = debtsRepository;
  }

  public async execute(debt_id: string): Promise<void> {
    const debt = await this.debtsRepository.findById(debt_id);
    if (!debt) {
      throw new AppError('Debt not found, see debts list from user', 400);
    }

    await this.debtsRepository.delete(debt);
  }
}

export default DeleteDebtService;
