import { Router } from 'express';

import baseRouter from './baseRouter';
import quoteRouter from './quoteRouter';
import contactRouter from './contactRouter';
import signoRouter from './signoRouter';

const routes = Router();

routes.use('/', baseRouter);
routes.use('/quote', quoteRouter);
routes.use('/contact', contactRouter);
routes.use('/signo', signoRouter);

export default routes;