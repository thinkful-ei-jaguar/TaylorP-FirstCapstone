import React, { Component } from 'react'
import RecipeCard from './recipeCard'
import RecipeListContext from '../Context/recipeListContext'
//import RecipeApiService from '../Services/recipe-api-service'
import './recipeList.css'

/** Recipe Cards will need to be mapped through upon searching, fetch call -> context -> recipe list -> .map() method here */

class RecipeList extends Component {
  static contextType = RecipeListContext

  // componentDidMount() {
  //   this.context.clearError()
  //   RecipeApiService.getRecipes()
  //     .then(this.context.setRecipeList)
  //     .catch(this.context.setError)
  // }

  renderRecipes() {
    const { recipeList = [] } = this.context
    return recipeList.map(recipe => 
      <RecipeCard
      key={recipe.id}
      recipe={recipe}
      />
      )
  }
  
  render(){
    return (
      <ul className='recipe-list' aria-live='polite'>
        {this.renderRecipes()}
      </ul>
    )
  }
}

export default RecipeList;