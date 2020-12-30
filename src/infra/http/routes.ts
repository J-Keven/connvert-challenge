import { Router } from 'express';
import userRoutes from '../../modules/users/infra/http/routes/users';
import debtsRoutes from '../../modules/debts/infra/http/routes/debts';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/debts', debtsRoutes);

export default routes;
