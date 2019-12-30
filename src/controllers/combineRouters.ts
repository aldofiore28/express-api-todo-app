import express from 'express';
import todoRouter from './todo.controller';

const combinedRouter = express.Router();

combinedRouter.use('/todos', todoRouter);

export default combinedRouter;