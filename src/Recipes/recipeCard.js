import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/free-solid-svg-icons'
import './recipeCard.css';

/** should user be able to favorite from the recipe search or in extended view? leaning towards extended... search list should just show name and minimal glass pic.
 * anchor tag doesn't seem like the right way to Link these two components, think about extend key value pair then introduce an if statment when rendering in what will be a map function, may get complicated.
 */

class RecipeCard extends Component {
  render(){
    const { recipe } = this.props
    return (
      <Link to={`/recipes/${recipe.id}`}>
        <li className='recipe-li'>
          <h2>{recipe.recipe_name}</h2>
          <span className='fas fa-glass-whiskey'></span>
        </li>
      </Link>
    )
  }
}

export default RecipeCard;