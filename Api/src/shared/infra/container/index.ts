import { container } from 'tsyringe';

import DebtsRepository from '../../../modules/debts/infra/typeorm/repositories/DebtsRepository';
import IDebtsRepository from '../../../modules/debts/repositories/IDebtsRepository';
import JsonPlaceholder from '../../../modules/users/infra/services/JsonPlaceholder';
import IJsonPlaceholder from '../../../modules/users/infra/services/model/IJsonPlaceholder';

container.registerSingleton<IDebtsRepository>(
  'DebtsRepository',
  DebtsRepository,
);

container.registerSingleton<IJsonPlaceholder>(
  'JsonPlaceholder',
  JsonPlaceholder,
);
