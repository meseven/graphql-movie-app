import React, { Component } from 'react';
import './App.css';

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
					<p>my app</p>
				</div>
			</ApolloProvider>
    );
  }
}

export default App;
