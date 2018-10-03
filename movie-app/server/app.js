const express = require('express');
const cors = require('cors');
//const expressGraphQL = require('express-graphql');
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

//const schema = require('./schema/schema');

const app = express();
app.use(cors());

// enviroment variables
require('dotenv').config();

// db connecion
const db = require('./helpers/db.js')();

// Mongo schemas
const Movie = require('./models/Movie');
const Director = require('./models/Director');

// typeDefs and resolvers
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolvers');

// Create schema
const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

app.use('/graphiql', graphiqlExpress({
	endpointURL: '/graphql'
}));

app.use('/graphql', graphqlExpress({
	schema,
	context: {
		Movie,
		Director
	}
}));

app.listen(5000, () => {
	// console.log('server is running...');
});
