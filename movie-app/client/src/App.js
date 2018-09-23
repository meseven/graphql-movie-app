import React, { Component } from 'react';
import './App.css';

// components
import MovieList from './components/MovieList';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
	url: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
			<ApolloProvider client={client}>
				<div className="App">
					<MovieList />
				</div>
			</ApolloProvider>
    );
  }
}

export default App;
