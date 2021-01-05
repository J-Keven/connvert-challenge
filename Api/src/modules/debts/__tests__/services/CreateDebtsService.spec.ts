import IJsonPlaceholder from '../../../users/infra/services/model/IJsonPlaceholder';
import AppError from '../../../../shared/error/AppError';
import IDebtsRepository from '../../repositories/IDebtsRepository';
import FakeDebtsRepository from '../../repositories/fake/fakeDebtsRepository';
import JsonPlaceholder from '../../../users/infra/services/JsonPlaceholder';
import CreateDebtService from '../../services/CreateDebtsService';

let debtsRepository: IDebtsRepository;
let createDebitService: CreateDebtService;
let jsonPlaceholder: IJsonPlaceholder;
describe('CreateDebts', () => {
  beforeEach(() => {
    debtsRepository = new FakeDebtsRepository();
    jsonPlaceholder = new JsonPlaceholder();
    createDebitService = new CreateDebtService(
      debtsRepository,
      jsonPlaceholder,
    );
  });

  it('Shoud be able to create a new debt for a user', async () => {
    const debit = await createDebitService.execute({
      description: 'Divida de test',
      user_id: 1,
      value: 500,
    });

    expect(debit.id).not.toBeNull();
    expect(debit.user_id).toBe(1);
  });

  it('Shoud be not be able to create a new debt if user not exist', async () => {
    await expect(
      createDebitService.execute({
        description: 'Divida de test',
        user_id: 123123123,
        value: 500,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
