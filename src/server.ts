import { MongoClient } from 'mongodb';
import { createConnectionToDb } from './db/database';
import express, { Request, Response } from 'express';
import { PORT, MONGODB_URI } from './util/secrets';

const server: express.Application = express();
const dbConnection: MongoClient = createConnectionToDb(MONGODB_URI);

server.get('/', (req: Request, res: Response) => {
	return res.json({
		message: 'hello',
	});
});

server.listen(PORT, () => {
	console.log('  ');
	console.log('  Server running on https://localhost:' + PORT);
	console.log('  CTRL + C to stop the server');
});

export default server;
