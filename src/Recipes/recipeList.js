import React, { Component } from 'react'
import RecipeCard from './recipeCard'
import './recipeList.css'

/** Recipe Cards will need to be mapped through upon searching, fetch call -> context -> recipe list -> .map() method here */

class RecipeList extends Component {
  render(){
    return (
      <ul className='recipe-list' aria-live='polite'>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </ul>
    )
  }
}

export default RecipeList;