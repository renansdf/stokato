import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('database URI not setup');
}

const client = new MongoClient(process.env.MONGODB_URI);

export default client;
