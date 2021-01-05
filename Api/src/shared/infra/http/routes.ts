import { Router } from 'express';
import userRoutes from '../../../modules/users/infra/http/routes/users';
import debtsRoutes from '../../../modules/debts/infra/http/routes/debts';
import usersInDebt from '../../../modules/debts/infra/http/routes/usersInDebt';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/debts', debtsRoutes);
routes.use('/users-in-debt', usersInDebt);

export default routes;
