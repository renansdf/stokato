import { Router } from 'express';
import budgetRouter from './budgetRouter';
import base from './base';

const routes = Router();

routes.use('/budget', budgetRouter);
routes.use('/', base);

export default routes;