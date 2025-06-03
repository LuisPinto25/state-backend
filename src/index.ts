import express, { type Request, type Response } from 'express';
import orderRouter from './routers/orderRouter';
import { getEnvirontment } from './config/getEnvironment';

const environment = getEnvirontment();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send({ hola: 'mundo' });
});

app.use('/orders', orderRouter);

app.listen(environment.PORT, () => {
  console.log(`Server run on http://localhost:${environment.PORT}`);
});
