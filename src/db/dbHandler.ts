import mongoose from 'mongoose';

export default (mongoDbUri: string) => {
	mongoose.connect(mongoDbUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const dbListener = mongoose.connection;
	dbListener.on('error', err => console.error('  MongoDB connection error. Please make sure MongoDB is running. ' + err));
	dbListener.once('open', () => console.log('  Connected to the database'));
};