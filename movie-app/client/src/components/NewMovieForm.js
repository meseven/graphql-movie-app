import React, {Component} from 'react';

import { Query, Mutation } from 'react-apollo';

// queries
import { getDirectorsQuery, getMoviesQuery, newMovieMutation } from '../queries/queries';

class NewMovieForm extends Component {
	state = {
		title: '',
		description: '',
		year: null,
		directorId: ''
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<Mutation mutation={newMovieMutation}>
				{ (addMovie, { loading, error }) => (

					<div className="container" data-state="New Movie">
						<div className="device" data-view="list">
							<form onSubmit={ e => {
								e.preventDefault();
								addMovie({
									variables: {
										title: this.state.title,
										description: this.state.description,
										year: parseInt(this.state.year, 10),
										directorId: this.state.directorId
									},
									refetchQueries: [{ query: getMoviesQuery }]
								});
							} }>
								<div>
									<label>Title</label>
									<input type="text" name="title" onChange={this.onChange} placeholder="Title"/>
								</div>
								<div>
									<label>Description</label>
									<textarea name="description" onChange={this.onChange} placeholder="Description"/>
								</div>
								<div>
									<label>Year</label>
									<input type="text" name="year" onChange={this.onChange} placeholder="Year"/>
								</div>
								<div>
									<label>Director</label>
									<select name="directorId" onChange={this.onChange} >
										<option disabled={true}>Choose Director</option>
										<Query query={getDirectorsQuery}>
											{({ loading, error, data }) => {
												if (loading) return <option disabled={true}>Loading...</option>;
												if (error) return <option disabled={true}>Error.</option>;

												return data.directors.map(({ id, name }) => (
													<option key={id} value={id}>
														{name}
													</option>
												))
											}}
										</Query>
									</select>
								</div>
								<div>
									<button type="submit">Submit</button>
								</div>
							</form>

							{ loading && <div>Loading...</div>}
							{ error && <div>Error!</div>}
						</div>
					</div>
				) }
			</Mutation>
		);
	}
}

export default NewMovieForm;
