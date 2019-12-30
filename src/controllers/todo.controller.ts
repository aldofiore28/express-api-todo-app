import { createJsonResponse } from './../util/utils';
import { Todo } from './../models/Todo';
import express from 'express';
import mongoose from 'mongoose';
import * as HttpStatus from 'http-status-codes';

const todoRouter = express.Router();

// In combineRouters.ts there will be the entity of what this route is
todoRouter
	.route('/')
	.get((req: express.Request, res: express.Response) => {
		Todo.find({}, (err: mongoose.Error, result) => {
			if (err) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json(createJsonResponse(false, err.message));
			}

			return res
				.status(HttpStatus.OK)
				.json(createJsonResponse(true, 'OK', result));
		});
	});

export default todoRouter;
