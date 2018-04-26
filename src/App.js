import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Cards from "./components/Cards/Cards";



class App extends Component {
  render() {
    return (
      <div>
  <Wrapper>
    <Header />
    <Jumbotron />
          <Cards image={.image}/> 
  </Wrapper> 
  </div>
    );
};
};

export default App;
