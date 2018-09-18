const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({

}));

app.listen(3000, () => {
	console.log('Server is running...');
});
