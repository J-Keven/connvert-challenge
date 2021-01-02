import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';
import AppError from '../../error/AppError';
import '../typeorm';
import '../container';

const app = express();
app.use(express.json());

app.use(cors());
app.use(routes);
app.use(errors());
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  console.log('estou aqui');
  if (err instanceof AppError) {
    return res.status(err.status).json({
      status: 'Error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'Error',
    message: 'Intarnal server error',
  });
});

export default app;
