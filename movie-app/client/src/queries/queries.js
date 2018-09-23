import { gql } from 'apollo-boost';

export const getDirectorsQuery = gql`
	{
		directors{
			id,
			name
		}
	}
`;

export const getMoviesQuery = gql`
	{
		movies{
			id,
			title,
			description
		}
	}
`;
