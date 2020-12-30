import Debts from '../infra/typeorm/schemas/Debts';
import IDebts from '../dtos/IDebt';

export default interface IDebtsRepository {
  // findById(id: string): Promise<Debit>;
  // findAllByUser(user_id: number): Promise<Debit[]>;
  create(data: IDebts): Promise<Debts>;
}
