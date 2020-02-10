import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav/nav-top'
import Footer from './Nav/footer'
import Recipes from './Recipes/recipes';
import Cabinet from './Cabinet/cabinet'
import AddSpirit from './AddSpirit/addSpirit'
import Favorites from './Favorites/favorites'


class App extends Component {
  render(){
    return (
      <>
        <Nav />

        <Route
        path='/recipes'
        component={Recipes} />

        <Route
        path='/cabinet'
        component={Cabinet} />

        <Route
        path='/add-spirit'
        component={AddSpirit} />

        <Route 
        path='/favorites'
        component={Favorites} />

        <Footer />
      </>
    )
  }
}

export default App;
