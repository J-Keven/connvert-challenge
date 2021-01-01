import AppError from '../../../../error/AppError';
import IDebtsRepository from '../../repositories/IDebtsRepository';
import FakeDebtsRepository from '../../repositories/fake/fakeDebtsRepository';
import UpdateDebtService from '../../services/UpdateDebtService';

let debtsRepository: IDebtsRepository;
let updateDebtService: UpdateDebtService;
describe('UpdateDebt', () => {
  beforeEach(() => {
    debtsRepository = new FakeDebtsRepository();
    updateDebtService = new UpdateDebtService(debtsRepository);
  });

  it('Should be able to update a debt', async () => {
    const debt1 = await debtsRepository.create({
      description: 'Test 1',
      user_id: 1,
      value: 500,
    });

    const debtUpdate = await updateDebtService.execute({
      debt_id: debt1.id.toString(),
      description: 'Testando novamente',
    });

    expect(debtUpdate.id).toBe(debt1.id);
    expect(debtUpdate.value).toBe(debt1.value);
  });

  it('Should not be able to update a debt if debt id not exist', async () => {
    await expect(
      updateDebtService.execute({
        debt_id: 'test',
        description: 'testato',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
