import express from 'express';
import { PORT, MONGODB_URI } from './util/secrets';
import initializeAndSetupServer from './config/initializeAndSetupServer';
import connectToDb from './db/dbHandler';
import router from './controllers/combineRouters';

// Setting up express
const server: express.Application = initializeAndSetupServer();

// Connecting to the database
connectToDb(MONGODB_URI);

server.use('/api', router);

server.listen(PORT, () => {
	console.log('  ');
	console.log('  Server running on http://localhost:' + PORT + '.');
	console.log('  CTRL + C to stop the server.');
});

export default server;
