import { Router } from 'express';
import budgetRouter from './budgetRouter';
import contactRouter from './contactRouter';
import baseRouter from './baseRouter';

const routes = Router();

routes.use('/budget', budgetRouter);
routes.use('/contact', contactRouter);
routes.use('/', baseRouter);

export default routes;