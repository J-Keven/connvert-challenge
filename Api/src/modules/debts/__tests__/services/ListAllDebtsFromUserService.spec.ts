import IJsonPlaceholder from '../../../users/infra/services/model/IJsonPlaceholder';
import AppError from '../../../../shared/error/AppError';
import IDebtsRepository from '../../repositories/IDebtsRepository';
import FakeDebtsRepository from '../../repositories/fake/fakeDebtsRepository';
import JsonPlaceholder from '../../../users/infra/services/JsonPlaceholder';
import ListAllDebtsFromUserService from '../../services/ListAllDebtsFromUserService';

let jsonPlaceholder: IJsonPlaceholder;
let debtsRepository: IDebtsRepository;
let listAllDebtsFromUser: ListAllDebtsFromUserService;
describe('ListAllDebtsFromUser', () => {
  beforeEach(() => {
    debtsRepository = new FakeDebtsRepository();
    jsonPlaceholder = new JsonPlaceholder();
    listAllDebtsFromUser = new ListAllDebtsFromUserService(
      debtsRepository,
      jsonPlaceholder,
    );
  });

  it('Shoud be able list all debts from user', async () => {
    const debt1 = await debtsRepository.create({
      description: 'Test 1',
      user_id: 1,
      value: 500,
    });

    await debtsRepository.create({
      description: 'Test 2',
      user_id: 2,
      value: 500,
    });

    const debt3 = await debtsRepository.create({
      description: 'Test 3',
      user_id: 1,
      value: 500,
    });

    const debts = await listAllDebtsFromUser.execute(1);
    expect(debts).toStrictEqual([debt1, debt3]);
  });

  it("should not be able to list all the user's debts if there is no user with a given id", async () => {
    await expect(
      listAllDebtsFromUser.execute(123123123),
    ).rejects.toBeInstanceOf(AppError);
  });
});
