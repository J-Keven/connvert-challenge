import { injectable, inject } from 'tsyringe';
import IDebt from '../dtos/IDebt';
import Debts from '../infra/typeorm/schemas/Debts';
import IDebtsRepository from '../repositories/IDebtsRepository';

@injectable()
class CreateDebitService {
  private debitRepository: IDebtsRepository;

  constructor(
    @inject('DebtsRepository')
    debitRepository: IDebtsRepository,
  ) {
    this.debitRepository = debitRepository;
  }

  public async execute({ description, user_id, value }: IDebt): Promise<Debts> {
    const debit = await this.debitRepository.create({
      description,
      user_id,
      value,
    });
    return debit;
  }
}

export default CreateDebitService;
