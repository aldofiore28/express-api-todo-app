import express, { Request, Response, Application } from 'express';
import { PORT } from './util/secrets';

const server: Application = express();

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
