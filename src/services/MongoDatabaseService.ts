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

  private async start (){
    await this.client.connect();
  
    const db = this.client.db(this.database);
    const collection = db.collection(this.collection);

    return collection;
  }

  public async create (object: Object) {
    let response;

    try{
      const collection = await this.start();
  
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
      const collection = await this.start();
  
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

      const collection = await this.start();

      response = await collection.deleteOne({"_id": objId});
    } catch(e) {
      response = {error: e};
    } finally {
      await this.client.close();
    }

    return response;
  }

  public async getById (id: string){
    let response;

    try{
      const collection = await this.start();
  
      const objId = new ObjectId(id);
  
      response = await collection.findOne({"_id": objId});
    } catch(e) {
      response = {error: e};
    } finally{
      await this.client.close();
    }

    return response;
  }

  public async updateSigno (id: string, encryptedSigno: string){
    let response;
    
    try{
      const collection = await this.start();
      
      const objId = new ObjectId(id);
  
      response = await collection.updateOne({"_id": objId}, {
        $set:{
          signo: encryptedSigno
        }
      });
    } catch(e) {
      response = {error: e};
    } finally{
      await this.client.close();
    }

    return response;
  }
}

export default MongoDatabaseService;