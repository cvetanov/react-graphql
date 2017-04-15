import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './util/client';

import logo from './logo.svg';
import './App.css';

import Container from './components/Container';


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <Container />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
