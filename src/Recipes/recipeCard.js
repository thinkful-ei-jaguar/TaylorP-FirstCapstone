import React, { Component } from 'react'
import './recipeCard.css'

/** should user be able to favorite from the recipe search or in extended view? leaning towards extended... search list should just show name and minimal glass pic */

class RecipeCard extends Component {
  render(){
    return (
      <li className='recipe-li'>
        <p>img</p>
        <h2>Margarita</h2>
        <label className='checkbox'>
          Favorite
          <input type='checkbox' />
        </label>
      </li>
    )
  }
}

export default RecipeCard;