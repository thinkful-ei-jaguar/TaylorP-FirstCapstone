import React, { Component } from 'react';
import Nav from './Nav/nav-top'
import Footer from './Nav/footer'
import Recipes from './Recipes/recipes';


class App extends Component {
  render(){
    return (
      <>
        <Nav />
        <Recipes />
        <Footer />
      </>
    )
  }
}

export default App;
