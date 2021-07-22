import {Router, Request, Response} from 'express';
import MongoDatabaseService from '../services/MongoDatabaseService';

const quoteRouter = Router();
const quoteData = new MongoDatabaseService('stokato','bugeto');

quoteRouter.get('/', async (request: Request, response: Response) => {
  const data = await quoteData.getAll();

  return response.json(data);
});

quoteRouter.post('/', async (request: Request, response: Response) => {
  const quote = request.body;

  const data = await quoteData.create(quote);

  return response.json(data);
});

quoteRouter.delete('/', async (request: Request, response: Response) => {
  const {id} = request.body;

  const data = await quoteData.deleteById(id);

  return response.json(data);
});

export default quoteRouter;