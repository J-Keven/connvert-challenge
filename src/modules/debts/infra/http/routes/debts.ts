import { Router } from 'express';
import { Segments, celebrate, Joi } from 'celebrate';
import DebtsController from '../controllers/DebtsController';
import UpdateDebitController from '../controllers/UpdateDebitController';
import ListAllDebitsFromUserController from '../controllers/ListAllDebitsFromUserController';

const debtsRoutes = Router();
const debtsController = new DebtsController();
const updateDebitController = new UpdateDebitController();
const listAllDebitsFromUserController = new ListAllDebitsFromUserController();

debtsRoutes.get('/', listAllDebitsFromUserController.index);
debtsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      value: Joi.number().required(),
      user_id: Joi.string().required(),
    },
  }),
  debtsController.create,
);
debtsRoutes.patch(
  '/:debt_id',
  celebrate({
    [Segments.PARAMS]: {
      debt_id: Joi.string().required(),
    },
    [Segments.BODY]: {
      value: Joi.number(),
      description: Joi.string(),
    },
  }),
  updateDebitController.index,
);
debtsRoutes.delete(
  '/:debt_id',
  celebrate({
    [Segments.PARAMS]: {
      debt_id: Joi.string().required(),
    },
  }),
  debtsController.delete,
);

export default debtsRoutes;
