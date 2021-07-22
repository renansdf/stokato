import { Router } from 'express';
import quoteRouter from './quoteRouter';
import contactRouter from './contactRouter';
import baseRouter from './baseRouter';

const routes = Router();

routes.use('/quote', quoteRouter);
routes.use('/contact', contactRouter);
routes.use('/', baseRouter);

export default routes;