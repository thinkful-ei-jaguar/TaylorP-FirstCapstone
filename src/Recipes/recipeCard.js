import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import icons from '../icons/rocksIcon.png'
import '@fortawesome/free-solid-svg-icons'
import './recipeCard.css';

class RecipeCard extends Component {
  renderIcon = (recipe) => {
    //return <img src={icons} alt='recipe icon' />
    //console.log(recipe.recipe_img)
  }

  render(){
    const { recipe } = this.props
    return (
      <Link to={`/recipes/${recipe.id}`}>
        <li className='recipe-li'>
          <h2>{recipe.recipe_name}</h2>
          {this.renderIcon(recipe)}
        </li>
      </Link>
    )
  }
}

export default RecipeCard;