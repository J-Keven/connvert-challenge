import { v4 } from 'uuid';
import IDebtsRepository from '../IDebtsRepository';
import Debts from '../../infra/typeorm/schemas/Debts';
import IDebt from '../../dtos/IDebt';
import AppError from '../../../../error/AppError';

class DebtsRepository implements IDebtsRepository {
  private debts: Debts[];

  constructor() {
    this.debts = [];
  }

  public async findById(id: string): Promise<Debts | undefined> {
    const debt = this.debts.find(item => item.id === id);

    return debt;
  }

  public async findAllFromUser(user_id: number): Promise<Debts[]> {
    const debtsFromUser = this.debts.filter(debt => debt.user_id === user_id);

    return debtsFromUser;
  }

  public async create({ value, user_id, description }: IDebt): Promise<Debts> {
    const debt = new Debts();

    Object.assign(debt, {
      id: v4(),
      value,
      user_id,
      description,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.debts.push(debt);

    return debt;
  }

  public async save(debt: Debts): Promise<Debts> {
    const debtIndex = this.debts.findIndex(item => item.id === debt.id);

    if (debtIndex === -1) {
      throw new AppError('Debit not exist');
    }

    this.debts[debtIndex] = debt;
    return debt;
  }

  public async delete(debt: Debts): Promise<void> {
    this.debts.splice(
      this.debts.findIndex(item => item.id === debt.id),
      1,
    );
  }
}

export default DebtsRepository;
