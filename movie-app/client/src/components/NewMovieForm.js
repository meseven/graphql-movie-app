import React, {Component} from 'react';

import { Query } from 'react-apollo';

// queries
import { getDirectorsQuery } from '../queries/queries';

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
			<div>
				<form>
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
			</div>
		);
	}
}

export default NewMovieForm;
