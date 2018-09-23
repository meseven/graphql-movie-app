const express = require('express');
const cors = require('cors');
const expressGraphQL = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

app.use(cors());

// dotenv
require('dotenv').config()

// db
const db = require('./helpers/db.js')();

app.use('/graphql', expressGraphQL({
	schema,
	graphiql: true
}));

app.listen(5000, () => {
	// console.log('server is running...');
});
