import React, {Component} from 'react';
import { Query } from 'react-apollo';

// queries
import { getMoviesQuery } from '../queries/queries';

class MovieList extends Component {render() {
		return (
			<div className="container" data-state="Movie App">
				<div className="device" data-view="list">
					<ul className="movie-list layer" data-layer="list">
						<Query query={getMoviesQuery}>
							{({ loading, error, data }) => {
								if (loading) return <div>Loading...</div>;
								if (error) return <div>Error.</div>;

								return data.movies.map(({ id, title, description }) => (
									<li className="content" key={id} onClick={this.showModal}>
										<div className="bg"></div>
										<div className="avatar"></div>
										<div className="title">{title}</div>
										<p>{ description }</p>
									</li>
								))
							}}
						</Query>
					</ul>
				</div>
			</div>
		);
	}
}

export default MovieList;
