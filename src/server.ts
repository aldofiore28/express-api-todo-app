import express from 'express';
import { PORT, MONGODB_URI } from './util/secrets';
import initializeAndSetupServer from './config/initializeAndSetupServer';
import connectToDb from './db/dbHandler';

// Setting up express
const server: express.Application = initializeAndSetupServer();
connectToDb(MONGODB_URI);

server.listen(PORT, () => {
	console.log('  ');
	console.log('  Server running on https://localhost:' + PORT + '.');
	console.log('  CTRL + C to stop the server.');
});

export default server;
