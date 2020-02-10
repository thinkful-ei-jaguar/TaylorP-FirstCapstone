import React, {Component} from 'react'
import './spiritSearch.css'


class SpiritSearch extends Component {
  render(){
    return (
      <section className='spirit-search'>
        <form className='spirit-search-form'>
          <div className='searchbar'>
            <label htmlFor='name'>Name:{' '}</label>
            <input type='text' name='name' id='name' placeholder='Ex: Espolon' />
          </div>
          <div className='spirit-select-button-div'>
            <label htmlFor='spirit-search'>Spirit:</label>
            <select name='spirit-search' id='spirit-search'>
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

export default SpiritSearch;