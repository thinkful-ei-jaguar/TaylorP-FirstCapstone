import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './Nav/nav-top'
import Footer from './Nav/footer'
import Recipes from './Recipes/recipes';
import Cabinet from './Cabinet/cabinet'
import AddSpirit from './AddSpirit/addSpirit'
import Favorites from './Favorites/favorites'
import RecipeExtended from './Recipes/recipeExtended'
import Landing from './Login/landing'
import PrivateRoute from './Utils/PrivateRoute'
import PublicOnlyRoute from './Utils/PublicOnlyRoute'
import './App.css'



class App extends Component {
  render(){
    return (
      <>
        <Nav />
        <div className='parallax'>
        <div className='parallax_layer parallax_layer-back'>
        </div>
        <div className='parallax_layer parallax_layer-base'>
        <PrivateRoute
        exact path='/recipes'
        component={Recipes} />

        <PrivateRoute
        path='/recipes/:id'
        component={RecipeExtended} />

        <PrivateRoute
        path='/cabinet'
        component={Cabinet} />

        <PrivateRoute
        path='/add-spirit'
        component={AddSpirit} />

        <PrivateRoute 
        path='/favorites'
        component={Favorites} />

        <PublicOnlyRoute
        exact path='/'
        component={Landing} />
        </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default withRouter(App);
