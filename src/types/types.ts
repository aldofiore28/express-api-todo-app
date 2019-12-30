import { ObjectId } from 'mongodb';

export interface JsonResponse {
	success: boolean;
	message: string;
	data: TodoInterface[] | [];
}

export interface TodoInterface {
	_id: ObjectId;
	description: string;
}
