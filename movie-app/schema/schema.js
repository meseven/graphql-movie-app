const graphql = require('graphql');
const _ = require('lodash');

const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList
} = graphql;

const movies = [
	{
		id: '1',
		title: 'The Godfather',
		description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
		year: 1972,
		directorId: '1'
	},
	{
		id: '2',
		title: 'Scarface',
		description: 'In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
		year: 1980,
		directorId: '3'
	},
	{
		id: '3',
		title: 'Pulp Fiction',
		description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
		year: 1994,
		directorId:'2'
	},
	{
		id: '4',
		title: 'Apocalypse Now',
		description: 'During the Vietnam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade Colonel who has set himself up as a god among a local tribe.',
		year: 1979,
		directorId: '1'
	},
	{
		id: '5',
		title: 'Reservoir Dogs',
		description: 'After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
		year: 1979,
		directorId: '3'
	}
];

const directors = [
	{
		id: '1',
		name: 'Francis Ford Coppola',
		birth: 1939
	},
	{
		id: '2',
		name: 'Brian De Palma',
		birth: 1940
	},
	{
		id: '3',
		name: 'Quentin Tarantino',
		birth: 1963
	},
];

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
		movies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args){
				return movies;
			}
		},
		directors: {
			type: new GraphQLList(DirectorType),
			resolve(parent, args){
				return directors;
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});

