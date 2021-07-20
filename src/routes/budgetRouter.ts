import {Router, Request, Response} from 'express';
import client from '../helpers/connection';

const budgetRouter = Router();

budgetRouter.get('/', async (request: Request, response: Response) => {
  const AllBudgets: any = [];

  try{
    await client.connect();

    const db = client.db('bugetodb');
    const stokato = db.collection('stokato');

    const cursor = stokato.find();

    await cursor.forEach((element) => {
      AllBudgets.push(element);
    });
  } catch(e) {
    console.log(e);
  } finally {
    await client.close();
  }

  return response.json(AllBudgets);
});

budgetRouter.post('/', async (request: Request, response: Response) => {
  const budget = request.body;

  try{
    await client.connect();

    const db = client.db('bugetodb');
    const stokato = db.collection('stokato');

    await stokato.insertOne(budget);
  } catch(e) {
    console.log(e);
  } finally {
    await client.close();
  }

  return response.json({message: 'check console'});
});

export default budgetRouter;