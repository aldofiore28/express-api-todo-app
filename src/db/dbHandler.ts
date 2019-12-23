import mongoose from 'mongoose';

export default (mongoDbUri: string) => {
	mongoose.connect(mongoDbUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
		.then(() => console.log('  Connected to the database'))
		.catch((err: mongoose.Error) => console.log(  'MongoDB connection error. Please make sure MongoDB is running. ' + err));

	mongoose.connection.on('error', (err: mongoose.Error) => console.error('  An error as occurred. ' + err));
};