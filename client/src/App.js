import React, { Component } from "react";
import logo from "./logo.svg";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Characters from "./components/Characters"
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <img src={logo} alt="react-logo" />
          <Characters />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
