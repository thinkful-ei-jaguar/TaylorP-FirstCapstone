import React, { Component } from 'react'
import RecipeCard from '../Recipes/recipeCard'
import './favorites.css'

class Favorites extends Component {
  render(){
    return (
      <main className='favorites-main'>
      <h2>Your Favorite Cocktails</h2>
      <label htmlFor='spirit-search'>Spirit:</label>
      <select name='spirit-search' id='spirit-search'>
        <option value='cabinet'>My Spirits</option>
        <option value='vodka'>Vodka</option>
        <option value='gin'>Gin</option>
        <option value='tequila'>Tequila</option>
        <option value='bourbon'>Bourbon</option>
        <option value='rye'>Rye</option>
        <option value='Scotch'>Scotch</option>
      </select>
      <ul className='favorites-list' aria-live='polite'>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </ul>
      </main>
    )
  }
}

export default Favorites;