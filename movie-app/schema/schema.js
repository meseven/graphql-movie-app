const graphql = require('graphql');
const _ = require('lodash');

// Mongodb Models
const Movie = require('../models/Movie');
const Director = require('../models/Director');

const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList
} = graphql;

const MovieType = new GraphQLObjectType({
	name: 'Movie',
	fields: () => ({
		id: { type: GraphQLID },
		title: { type: GraphQLString },
		description: { type: GraphQLString },
		year: { type: GraphQLInt },
		director: {
			type: DirectorType,
			resolve(parent, args){
				return _.find(directors, { id: parent.directorId });
			}
		}
	})
});

const DirectorType = new GraphQLObjectType({
	name: 'Director',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		birth: { type: GraphQLInt },
		movies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args){
				return _.filter(movies, { directorId: parent.id });
			}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		movie: {
			type: MovieType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args){
				return _.find(movies, { id: args.id });
			}
		},
		director: {
			type: DirectorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args){
				return _.find(directors, { id: args.id });
			}
		},
		movies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args){
				return movies
			}
		},
		directors: {
			type: new GraphQLList(DirectorType),
			resolve(parent, args){
				return directors
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addMovie: {
			type: MovieType,
			args: {
				title: { type: GraphQLString },
				description: { type: GraphQLString },
				year: { type: GraphQLInt },
				directorId: { type: GraphQLString }
			},
			resolve(parent, args){
				const movie = new Movie({
					title: args.title,
					description: args.description,
					year: args.year,
					directorId: args.directorId
				});

				return movie.save();
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});

