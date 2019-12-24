import express from 'express';
import bodyParser from 'body-parser';

export default () => {
	const server: express.Application = express();

	server.use(bodyParser.json());
	server.use(bodyParser.urlencoded({ extended: true }));

	return server;
};