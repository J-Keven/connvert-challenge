import { MongoRepository, getMongoRepository } from 'typeorm';
import IDebtsRepository from '../../../repositories/IDebtsRepository';
import Debts from '../schemas/Debts';
import IDebt from '../../../dtos/IDebt';

class DebtsRepository implements IDebtsRepository {
  private ormRepository: MongoRepository<Debts>;

  constructor() {
    this.ormRepository = getMongoRepository(Debts);
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
}

export default DebtsRepository;
