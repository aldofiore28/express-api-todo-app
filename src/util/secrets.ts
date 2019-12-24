import dotenv from 'dotenv';

dotenv.config({ path: '.env'});

export const PORT: number = parseInt(process.env.PORT) || 3210;
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production';
export const MONGODB_URI = prod ? process.env['MONGODB_URI'] : process.env['MONGODB_URI_LOCAL'];

if(!MONGODB_URI) {
	if (prod) {
		console.error('No mongo db connection string found. Set MONGODB_URI environment variable');
	} else {
		console.error('No mongo db connection string found. Set MONGODB_URI_LOCAL environment variable');
	}
	// kill the process
	process.exit(1);
}