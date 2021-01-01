import { inject, injectable } from 'tsyringe';
import Debts from '../infra/typeorm/schemas/Debts';
import AppError from '../../../error/AppError';
import IDebtsRepository from '../repositories/IDebtsRepository';
import IJsonPlaceholder from '../../users/infra/services/model/IJsonPlaceholder';

@injectable()
class ListAllDebtsFromUserService {
  private debtsRepository: IDebtsRepository;

  private jsonPlaceholder: IJsonPlaceholder;

  constructor(
    @inject('DebtsRepository')
    debitRepository: IDebtsRepository,
    @inject('JsonPlaceholder')
    jsonPlaceholder: IJsonPlaceholder,
  ) {
    this.debtsRepository = debitRepository;
    this.jsonPlaceholder = jsonPlaceholder;
  }

  public async execute(user_id: number): Promise<Debts[]> {
    const user = await this.jsonPlaceholder.findUserById(user_id);

    if (!user) {
      throw new AppError('this user not exeist');
    }

    const debts = this.debtsRepository.findAllFromUser(user_id);

    return debts;
  }
}

export default ListAllDebtsFromUserService;
