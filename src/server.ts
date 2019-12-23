import { MongoClient } from 'mongodb';
import express, { Request, Response } from 'express';
import { PORT, MONGODB_URI } from './util/secrets';
import initializeAndSetupServer from './config/initializeAndSetupServer';
import connectToDb from './db/dbHandler';


// Setting up express
const server: express.Application = initializeAndSetupServer();
connectToDb(MONGODB_URI);

server.get('/', (req: Request, res: Response) => {
	return res.json({
		message: 'hello',
	});
});

server.listen(PORT, () => {
	console.log('  ');
	console.log('  Server running on https://localhost:' + PORT + '.');
	console.log('  CTRL + C to stop the server.');
});

export default server;
