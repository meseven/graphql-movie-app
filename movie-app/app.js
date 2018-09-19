const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({

}));

app.listen(5000, () => {
	console.log('server is running...');
});
