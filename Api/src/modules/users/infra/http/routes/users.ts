import { Router } from 'express';
import ListAllUsersContrller from '../controllers/UsersController';

const listAllUsersContrller = new ListAllUsersContrller();

const userRoutes = Router();

userRoutes.get('/', listAllUsersContrller.index);

export default userRoutes;
