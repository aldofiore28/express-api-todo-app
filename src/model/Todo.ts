import mongoose from 'mongoose';

export type TodoDocument = mongoose.Document & {
	description: string;
};

const todoSchema = new mongoose.Schema({
	description: {
		type: String,
		required: true,
	},
});

export const Todo = mongoose.model<TodoDocument>('Todo', todoSchema);
