import { JsonResponse } from './../types/types';
import { Todo, TodoDocument } from './../models/Todo';
import express from 'express';
import mongoose from 'mongoose';

const todoRouter = express.Router();

todoRouter.route('/')
	.get((req: express.Request, res: express.Response) => {
		Todo.find({}, (err: mongoose.Error, result) => {
			if (err) {
				return res.status(404).json({
					success: false,
					message: 'nothing found',
					data: [],
				} as JsonResponse<{}>);
			}

			return res.status(200).json({
				success: true,
				message: 'OK',
				data: result,
			} as JsonResponse<TodoDocument[]>);
		});
	});

export default todoRouter;
