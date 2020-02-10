import React, { Component } from 'react'
import RecipeSearch from './recipeSearch'
//import RecipeList from './recipeList'
//import './recipes.css'

class Recipes extends Component {
  render(){
    return (
      <main className='recipe_main'>
        <RecipeSearch />
      </main>
    )
  }
}

export default Recipes;