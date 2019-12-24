import express from 'express';
import todoRouter from './todo.controller';

const combinedRouter = express.Router();

combinedRouter.use('/', todoRouter);

export default combinedRouter;