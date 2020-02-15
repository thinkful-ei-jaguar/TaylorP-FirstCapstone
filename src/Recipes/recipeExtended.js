import React, { Component } from 'react'
import RecipeContext from '../Context/recipeContext' 
import RecipeApiService from '../Services/recipe-api-service'
import './recipeExtended.css'

/** -note for favortie checkbox: use css to make into  a "switch" instead for modernization.
 * -change the ul for ingredients to two lists: the first with sizes, the second next to it in block display with the item.
 */

class RecipeExtended extends Component {
  static contextType = RecipeContext

  componentDidMount() {
    const { id } = this.props.match.params
    this.context.clearError()
    RecipeApiService.getRecipe(id)
      .then(this.context.setRecipe)
      .catch(this.context.setError)
  }

  renderIngredients() {
    const { recipe } = this.context
    const ingredients = recipe.recipe_ingredients+''
    const split = ingredients.split(',').map((i, idx) => <li key={idx}>{i}</li>)
    return split
  }

  goBack = () => {
    this.props.history.push('/recipes');
  }

  render(){
    const { recipe } = this.context
    return (
      <main className='expanded-main'>
        <section className='recipe-expanded'>
         <div className='recipe-name-icon-div'>
           <div className='img'>img</div>
            <h2>{recipe.recipe_name}</h2>
           </div>
         <div className='recipe-specs-make-div'>
           <div className='specs-div'>
             <h3>Ingredients:</h3>
             <ul>
               {this.renderIngredients()}
             </ul>
           </div>
           <div className='make-div'>
            <p>{recipe.recipe_prep}</p>
            <label className='checkbox'>
            Favorite
            <input type='checkbox' />
          </label>
           </div>
         </div>
        </section>
        <button className='go-back' onClick={this.goBack} >Go Back</button>
      </main>
    )
  }
}

export default RecipeExtended;