import { MongoClient, ObjectId } from 'mongodb';
import connection from '../helpers/connection';

class MongoDatabaseService {
  private client: MongoClient;
  private database: string;
  private collection: string;

  constructor (dbName: string, collectionName: string){
    this.client = connection;
    this.database = dbName;
    this.collection = collectionName;
  }

  public async create (object: Object) {
    let response;

    try{
      await this.client.connect();
  
      const db = this.client.db(this.database);
      const collection = db.collection(this.collection);
  
      await collection.insertOne(object);
      response = {success: 'object inserted into database'}
    } catch(e) {
      response = {error: e};
    } finally {
      await this.client.close();
    }

    return response;
  }

  public async getAll (){
    let data: any = [];

    try{
      await this.client.connect();
  
      const db = this.client.db(this.database);
      const collection = db.collection(this.collection);
  
      const cursor = collection.find();
      
      await cursor.forEach((element) => {
        data.push(element);
      });
    } catch(e) {
      data.push({error: e});
    } finally {
      await this.client.close();
    }

    return data;
  }

  public async deleteById (id: string){
    let response;

    try{
      const objId = new ObjectId(id);

      await this.client.connect();
  
      const db = this.client.db(this.database);
      const collection = db.collection(this.collection);

      response = await collection.deleteOne({"_id": objId});
    } catch(e) {
      response = {error: e};
    } finally {
      await this.client.close();
    }

    return response;
  }
}

export default MongoDatabaseService;