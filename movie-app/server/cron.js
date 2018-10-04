const cron = require('node-cron');

// models
const Movie = require('./models/Movie');

const data = [
	{
		"title" : "The Godfather",
		"description" : "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
		"year" : 1972,
		"directorId" : "5bacd4ee568cc982d0c4c63b",
	},

	/* 2 */
	{
		"title" : "Apocalypse Now",
		"description" : "During the Vietnam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade Colonel who has set himself up as a god among a local tribe.",
		"year" : 1979,
		"directorId" : "5bacd4ee568cc982d0c4c63b",
	},

	/* 3 */
	{
		"title" : "Se7en",
		"description" : "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
		"year" : 1995,
		"directorId" : "5bacd59c568cc982d0c4c63e",
	},

	/* 4 */
	{
		"title" : "The Hateful Eight",
		"description" : "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
		"year" : 2015,
		"directorId" : "5ba385c3aa53b4d508653aaa",
	},

	/* 5 */
	{
		"title" : "Pulp Fiction",
		"description" : "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
		"year" : 1994,
		"directorId" : "5bacd4ee568cc982d0c4c63b"
	}
];

module.exports.init = () => {
	cron.schedule('0 6 * * * *', () => {
		Movie.remove({}, (err) => {
			Movie.insertMany(data)
				.then(function(docs) {
					console.log('cron ok! graphql-movie-app');
				})
				.catch(function(err) {
					// error handling here
				});
		})
	});
};