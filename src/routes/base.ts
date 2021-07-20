import {Router} from 'express';

const base = Router();

base.get('/', (request, response) => {
  return response.json({message: "hello. this is stokato, a microservice for Konekto."});
});

export default base;