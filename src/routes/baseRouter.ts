import {Router} from 'express';

const baseRouter = Router();

baseRouter.get('/', (request, response) => {
  return response.json({message: "hello. this is stokato, a microservice for Konekto."});
});

export default baseRouter;