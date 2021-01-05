import { Router } from 'express';
import ListAllUserInDebtController from '../controllers/ListAllUserInDebtController';

const userIndebtRoutes = Router();

const listAllUserInDebtController = new ListAllUserInDebtController();

userIndebtRoutes.get('/', listAllUserInDebtController.index);

export default userIndebtRoutes;
