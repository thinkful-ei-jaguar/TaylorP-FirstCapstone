import React, { Component } from 'react'


class AddSpirit extends Component {
  render(){
    return (
      <main className='spirit_main'>
        <form className='add-spirit-form'>
          <div className='namebar'>
            <label htmlFor='name'>Name:{' '}</label>
            <input type='text' name='name' id='name' placeholder='Ex: Espolon' />
          </div>
          <div className='spirit-select-button-div'>
            <label htmlFor='spirit'>Spirit:</label>
            <select name='spirit' id='spirit'>
              <option value='Vodka'>Vodka</option>
              <option value='Gin'>Gin</option>
              <option value='Tequila'>Tequila</option>
              <option value='Bourbon'>Bourbon</option>
              <option value='Rye'>Rye</option>
              <option value='Scotch'>Scotch</option>
            </select>
            <button type='submit'>
              Save
            </button>
          </div>
        </form>
      </main>
    )
  }
}

export default AddSpirit;