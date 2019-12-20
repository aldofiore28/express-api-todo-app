import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server: Application = express();

const PORT: number = parseInt(process.env.PORT) || 3030;

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
