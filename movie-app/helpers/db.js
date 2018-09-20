const mongoose = require('mongoose');

module.exports = () => {
	mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true });

	mongoose.connection.on('open', () => {
		// console.log('Mongodb connected.');
	});

	mongoose.connection.on('error', err => {
		console.log(err);
	});
};
