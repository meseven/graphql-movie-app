import React, {Component} from 'react';
import { Query } from 'react-apollo';

// queries
import { getMoviesQuery } from '../queries/queries';

class MovieList extends Component {
	render() {
		return (
			<div>
				<ul className="movie-list">
					<Query query={getMoviesQuery}>
						{({ loading, error, data }) => {
							if (loading) return <div>Loading...</div>;
							if (error) return <div>Error.</div>;

							return data.movies.map(({ id, title }) => (
								<li key={id}>
									{title}
								</li>
							))
						}}
					</Query>
				</ul>
			</div>
		);
	}
}

export default MovieList;
