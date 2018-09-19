const graphql = require('graphql');

const { 
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} = graphql;

const MovieType = new GraphQLObjectType({
	name: 'Movie',
	fields: () => ({
		id: { type: GraphQLString },
		title: { type: GraphQLString },
		description: { type: GraphQLString },
		year: { type: GraphQLInt }
	})
});
