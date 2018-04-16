import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";



class App extends Component {
  render() {
    return (
      <div>
  <Wrapper>
    <Header />
    <Jumbotron />
  </Wrapper> 
  </div>
    );
};
};

export default App;
