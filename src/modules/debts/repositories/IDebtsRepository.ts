import Debts from '../infra/typeorm/schemas/Debts';
import IDebts from '../dtos/IDebt';

export default interface IDebtsRepository {
  findById(id: string): Promise<Debts | undefined>;
  findAllFromUser(user_id: number): Promise<Debts[]>;
  create(data: IDebts): Promise<Debts>;
  save(debt: Debts): Promise<Debts>;
  delete(debt: Debts): Promise<void>;
}
