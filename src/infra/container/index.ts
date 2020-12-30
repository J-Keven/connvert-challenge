import { container } from 'tsyringe';

import DebtsRepository from '../../modules/debts/infra/typeorm/repositories/DebtsRepository';

container.registerSingleton('DebtsRepository', DebtsRepository);
