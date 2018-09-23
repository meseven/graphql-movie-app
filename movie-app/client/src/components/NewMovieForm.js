import React, {Component} from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const getDirectorsQuery = gql`
	{
		directors{
			id,
			name
		}
	}
`;

class NewMovieForm extends Component {
	render() {
		return (
			<div>
				<form>
					<div>
						<label>Title</label>
						<input type="text" name="title" placeholder="Title"/>
					</div>
					<div>
						<label>Description</label>
						<textarea name="description" placeholder="Description"/>
					</div>
					<div>
						<label>Year</label>
						<input type="text" name="year" placeholder="Year"/>
					</div>
					<div>
						<label>Director</label>
						<select name="director" id="director">
							<option>Choose Director</option>
							<Query query={getDirectorsQuery}>
								{({ loading, error, data }) => {
									if (loading) return <option disabled={true}>Loading...</option>;
									if (error) return <option disabled={true}>Error.</option>;

									return data.directors.map(({ id, name }) => (
										<option key={id}>
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
