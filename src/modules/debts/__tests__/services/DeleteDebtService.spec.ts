import IDebtsRepository from '../../repositories/IDebtsRepository';
import FakeDebtsRepository from '../../repositories/fake/fakeDebtsRepository';
import DeleteDebtService from '../../services/DeleteDebtService';
import AppError from '../../../../error/AppError';

let debtsRepository: IDebtsRepository;
let deleteDebtService: DeleteDebtService;
describe('DeleteDebt', () => {
  beforeEach(() => {
    debtsRepository = new FakeDebtsRepository();
    deleteDebtService = new DeleteDebtService(debtsRepository);
  });

  it('Shoud be able to delete a debt from user', async () => {
    const debt1 = await debtsRepository.create({
      description: 'Test 1',
      user_id: 1,
      value: 500,
    });

    const debt2 = await debtsRepository.create({
      description: 'Test 3',
      user_id: 1,
      value: 500,
    });

    await deleteDebtService.execute(debt2.id.toString());

    const debts = await debtsRepository.findAllFromUser(1);
    expect(debts).toStrictEqual([debt1]);
  });

  it('Should not be able to delete a debt if debt id not exist', async () => {
    await expect(deleteDebtService.execute('test-id')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
