import { Router } from 'express';
import DebtsController from '../controllers/DebtsController';

const debtsRoutes = Router();
const debtsController = new DebtsController();

debtsRoutes.post('/', debtsController.create);

export default debtsRoutes;
