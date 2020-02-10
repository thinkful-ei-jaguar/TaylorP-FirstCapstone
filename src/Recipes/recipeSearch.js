import React, {Component} from 'react'
import './recipeSearch.css'
/** Keyword search function to look through 'tags' object in data structure in order to search more in depthly, tags will be made by me when seeding the DB */


class RecipesSearch extends Component {
  render(){
    return (
      <section className='recipe-search'>
        <form className='recipe-search-form'>
          <div className='searchbar'>
            <label htmlFor='keyword'>Keyword:{' '}</label>
            <input type='text' name='keyword' id='keyword' placeholder='Ex: Margartia' />
          </div>
          <div className='recipe-select-button-div'>
            <label htmlFor='spirit-search'>Spirit:</label>
            <select name='spirit-search' id='spirit-search'>
              <option value='owned'>My Spirits</option>
              <option value='vodka'>Vodka</option>
              <option value='gin'>Gin</option>
              <option value='tequila'>Tequila</option>
              <option value='bourbon'>Bourbon</option>
              <option value='rye'>Rye</option>
              <option value='Scotch'>Scotch</option>
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