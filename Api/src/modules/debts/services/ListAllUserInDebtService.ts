import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/error/AppError';
import IDebtsRepository from '../repositories/IDebtsRepository';
import IJsonPlaceholder from '../../users/infra/services/model/IJsonPlaceholder';
import IUserProps from '../../users/dtos/IUsers';

type IReaponse = Array<{
  user: IUserProps;
  count_debit: number;
  debt_total: number;
}>;

@injectable()
class ListAllUserInDebtService {
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

  public async execute(): Promise<IReaponse> {
    const users = await this.jsonPlaceholder.getUsers();

    if (!users) {
      throw new AppError('this user not exeist');
    }

    const usersInDebt: IReaponse = await Promise.all(
      users.map(async user => {
        const debits = await this.debtsRepository.findAllFromUser(user.id);

        return {
          user,
          count_debit: debits.length,
          debt_total: debits.reduce(
            (acumulator, debt) => acumulator + debt.value,
            0,
          ),
        };
      }),
    );

    return usersInDebt.filter(user => user.count_debit !== 0);
  }
}

export default ListAllUserInDebtService;
