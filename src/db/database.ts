import { MongoClient } from 'mongodb';

/* 
	Mongo will establish a connection with the given database. 
	This one doesn't actually allow you to connect to the database, but it will just give you
	directions and set ups for where the DB is located.
*/
export const createConnectionToDb = (uri: string): MongoClient => new MongoClient(uri);