import {Router, Request, Response} from 'express';
import MongoDatabaseService from '../services/MongoDatabaseService';

const contactRouter = Router();
const contactData = new MongoDatabaseService('stokato','kontakto');

contactRouter.get('/', async (request: Request, response: Response) => {
  const data = await contactData.getAll();

  return response.json(data);
});

contactRouter.post('/', async (request: Request, response: Response) => {
  const contact = request.body;

  const data = await contactData.create(contact);

  return response.json(data);
});

export default contactRouter;