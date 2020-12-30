import 'reflect-metadata';
import 'express-async-error';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '../../error/AppError';
import '../typeorm';
import '../container';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (err: AppError | Error, req: Request, res: Response, Next: NextFunction) => {
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
  },
);

export default app;
