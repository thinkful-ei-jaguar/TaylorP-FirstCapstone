import React, {Component} from 'react'
import RecipeApiService from '../Services/recipe-api-service'
import RecipeListContext from '../Context/recipeListContext'
import './recipeSearch.css'
/** Keyword search function to look through 'tags' object in data structure in order to search more in depthly, tags will be made by me when seeding the DB */


class RecipesSearch extends Component {
  static contextType = RecipeListContext

  handleFormSubmit= (e)=> {
    let keyword; //gives input value
    let filter; //gives dropdown value
    if(e.target[0].value) {
      keyword = e.target[0].value
    }
    else {
      keyword = '';
    }
     
    if(e.target[1].value){
      filter = e.target[1].value
    }
    else {
      filter = '';
    }
  
    e.preventDefault()
    RecipeApiService.getRecipeBySearch(keyword, filter)
      .then(this.context.setRecipeList)
      .catch(this.context.setError)
  }

  render(){
    return (
      <section className='recipe-search'>
        <form className='recipe-search-form' onSubmit={this.handleFormSubmit}>
          <div className='searchbar'>
            <label htmlFor='keyword'>Keyword:{''}</label>
            <input type='text' name='keyword' id='keyword' placeholder='Ex: Margartia' />
          </div>
          <div className='recipe-select-button-div'>
            <label htmlFor='filter'>Spirit:</label>
            <select name='filter' id='filter'>
              <option value='All'>All</option>
              <option value='Vodka'>Vodka</option>
              <option value='Gin'>Gin</option>
              <option value='Tequila'>Tequila</option>
              <option value='Bourbon'>Bourbon</option>
              <option value='Rye'>Rye</option>
              <option value='Scotch'>Scotch</option>
              <option value='Amaro'>Amaro</option>
            </select>
            <button type='submit'>
              Search
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default RecipesSearch;