import { Router } from 'express';
import ListAllUsersContrller from '../controllers/UsersController';
import ShowUserByIdController from '../controllers/ShowUserByIdController';

const listAllUsersContrller = new ListAllUsersContrller();
const showUserByIdController = new ShowUserByIdController();

const userRoutes = Router();

userRoutes.get('/', listAllUsersContrller.index);
userRoutes.get('/:id', showUserByIdController.index);

export default userRoutes;
