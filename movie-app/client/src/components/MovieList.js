import React, {Component} from 'react';

import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getMoviesQuery = gql`
	{
		movies{
			id,
			title,
			description
		}
	}
`;

class MovieList extends Component {
	listMovies(){
		const { data } = this.props;

		if (data.loading)
		  return <div>Loading...</div>;
		else
			return data.movies.map(movie => <li key={movie.id}>{movie.title}</li>)
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<ul className="movie-list">
					{
						this.listMovies()
					}
				</ul>
			</div>
		);
	}
}

export default graphql(getMoviesQuery)(MovieList);
