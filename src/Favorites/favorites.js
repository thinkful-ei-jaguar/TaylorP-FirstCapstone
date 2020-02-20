import React, { Component } from 'react'
import RecipeCard from '../Recipes/recipeCard'
import RecipeContext from '../Context/recipeContext'
import TokenService from '../Services/token-service'
import RecipeApiService from '../Services/recipe-api-service'
import './favorites.css'

class Favorites extends Component {
  static contextType = RecipeContext

  componentDidMount() {
    const id = TokenService.getUserId()
    this.context.clearError()
    RecipeApiService.getFavorites(id)
      .then(this.context.setFavoriteList)
      .catch(this.context.setError)
  }

  setSpiritType = (e) => {
    const filter = e.target.value;
    this.context.setSpirit(filter)
  }

  renderFavorites() {
    const { favoriteList = [] } = this.context;
    const filter = this.context.spirit;
    let filteredList = [];

    if(filter === 'all'){
      filteredList = favoriteList;
    } else {
      filteredList = favoriteList.filter(spirit => spirit.spirit_id === Number(filter))
    }
  
    return filteredList.map(recipe => 
      <RecipeCard
      key={recipe.favorite_id}
      recipe={recipe}
      />
    )
  }

  render(){
    return (
      <main className='favorites-main'>
      <h2>Your Favorite Cocktails</h2>
      <label htmlFor='spirit-search'>Spirit:</label>
      <select name='spirit-search' id='spirit-search' onChange={this.setSpiritType}>
      <option value='all'>All</option>
        <option value='2'>Vodka</option>
        <option value='3'>Gin</option>
        <option value='1'>Tequila</option>
        <option value='4'>Bourbon</option>
        <option value='7'>Rye</option>
        <option value='5'>Scotch</option>
        <option value='6'>Amaro</option>
        <option value='8'>Cognac</option>
        <option value='9'>Rum</option>
      </select>
      <ul className='favorites-list' aria-live='polite'>
        {this.renderFavorites()}
      </ul>
      </main>
    )
  }
}

export default Favorites;