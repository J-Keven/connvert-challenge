import { MongoRepository, getMongoRepository } from 'typeorm';
import IDebtsRepository from '../../../repositories/IDebtsRepository';
import Debts from '../schemas/Debts';
import IDebt from '../../../dtos/IDebt';

class DebtsRepository implements IDebtsRepository {
  private ormRepository: MongoRepository<Debts>;

  constructor() {
    this.ormRepository = getMongoRepository(Debts);
  }

  public async findById(id: string): Promise<Debts | undefined> {
    const debt = await this.ormRepository.findOne(id);

    return debt;
  }

  public async findAllFromUser(user_id: number): Promise<Debts[]> {
    const debtsFromUser = this.ormRepository.find({
      user_id,
    });

    return debtsFromUser;
  }

  public async create({ value, user_id, description }: IDebt): Promise<Debts> {
    const debt = this.ormRepository.create({
      description,
      user_id,
      value,
    });

    await this.ormRepository.save(debt);

    return debt;
  }

  public async delete(debt: Debts): Promise<void> {
    await this.ormRepository.delete(debt.id);
  }
}

export default DebtsRepository;
