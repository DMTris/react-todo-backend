//import db
import {MongoClient} from 'mongodb';
//create schema and mongo connection
const schema = 'react_todo';
const port = 'mongodb://grillberadmin:1234grill@ds129641.mlab.com:29641/grillber';
const mongoUri = process.env.MONGO_URI || 'mongodb://grillberadmin:1234grill@ds129641.mlab.com:29641/grillber';
const connect = async () => await MongoClient.connect(mongoUri);
//export a getCollection method
export const getCollection = async (collection) => {
  const db = await connect();
  return db.collection(collection);
};
