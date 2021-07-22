import {Router, Request, Response} from 'express';
import MongoDatabaseService from '../services/MongoDatabaseService';

const budgetRouter = Router();
const budgetData = new MongoDatabaseService('stokato','bugeto');

budgetRouter.get('/', async (request: Request, response: Response) => {
  const data = await budgetData.getAll();

  return response.json(data);
});

budgetRouter.post('/', async (request: Request, response: Response) => {
  const budget = request.body;

  const data = await budgetData.create(budget);

  return response.json(data);
});

export default budgetRouter;