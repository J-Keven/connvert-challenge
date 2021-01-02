import { injectable, inject } from 'tsyringe';
import AppError from '../../../shared/error/AppError';
import IDebt from '../dtos/IDebt';
import Debts from '../infra/typeorm/schemas/Debts';
import IDebtsRepository from '../repositories/IDebtsRepository';
import IJsonPlaceholder from '../../users/infra/services/model/IJsonPlaceholder';

@injectable()
class CreateDebitService {
  private debitRepository: IDebtsRepository;

  private jsonPlaceholder: IJsonPlaceholder;

  constructor(
    @inject('DebtsRepository')
    debitRepository: IDebtsRepository,
    @inject('JsonPlaceholder')
    jsonPlaceholder: IJsonPlaceholder,
  ) {
    this.debitRepository = debitRepository;
    this.jsonPlaceholder = jsonPlaceholder;
  }

  public async execute({ description, user_id, value }: IDebt): Promise<Debts> {
    const user = await this.jsonPlaceholder.findUserById(user_id);

    if (!user) {
      throw new AppError('this user not exist');
    }

    const debit = await this.debitRepository.create({
      description,
      user_id,
      value,
    });
    return debit;
  }
}

export default CreateDebitService;
