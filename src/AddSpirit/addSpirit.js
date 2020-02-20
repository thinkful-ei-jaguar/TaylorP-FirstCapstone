import React, { Component } from 'react'
import SpiritApiService from '../Services/spirit-api-service'
import TokenService from '../Services/token-service'
import './addSpirit.css'


class AddSpirit extends Component {

  handleSpiritSubmit = e => {
    e.preventDefault()
    const { spirit_name, spirit_id } = e.target
    const user_id = TokenService.getUserId()
    const spirit = { spirit_name:spirit_name.value, spirit_id:Number(spirit_id.value), user_id} 
    

    SpiritApiService.postSpirit(spirit, user_id)
    .then(this.props.history.push('/cabinet'))
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render(){
    return (
      <main className='spirit_main'>
        <form className='add-spirit-form' onSubmit={this.handleSpiritSubmit}>
          <div className='namebar'>
            <label htmlFor='spirit_name'>Spirit Name:{' '}</label>
            <input type='text' name='spirit_name' id='spirit_name' placeholder='Ex: Espolon' />
          </div>
          <div className='spirit-select-button-div'>
            <label htmlFor='spirit_id'>Spirit:</label>
            <select name='spirit_id' id='spirit_id'>
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
            <button type='submit'>
              Save
            </button>
          </div>
        </form>
        <button type='button' className='go-back' onClick={this.goBack} >Go Back</button>
      </main>
    )
  }
}

export default AddSpirit;