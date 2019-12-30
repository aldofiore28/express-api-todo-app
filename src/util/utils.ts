import { JsonResponse, TodoInterface } from './../types/types';

export const createJsonResponse = (
	success: boolean,
	message: string,
	data: TodoInterface[] = []
): JsonResponse => ({
	success,
	message,
	data,
});
