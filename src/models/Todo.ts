import mongoose from 'mongoose';

export type TodoDocument = mongoose.Document & {
	description: string;
};

const todoSchema = new mongoose.Schema({
	description: {
		required: true,
		type: String,
	},
});

export const Todo = mongoose.model<TodoDocument>('Todo', todoSchema);