import React, { Component } from 'react'
import SpiritApiService from '../Services/spirit-api-service'
import TokenService from '../Services/token-service'
import SpiritListContext from '../Context/spiritListContext'
import './addSpirit.css'


class AddSpirit extends Component {
  static contextType = SpiritListContext

  handleSpiritSubmit = e => {
    e.preventDefault()
    const { spiritList } = this.context
    const { spirit_name, spirit_id } = e.target
    const user_id = TokenService.getUserId()
    const spirit = {spirit_name:spirit_name.value, spirit_id:Number(spirit_id.value), user_id} 
    //const pushToCabinet = function() { this.props.history.push('/cabinet') }

    SpiritApiService.postSpirit(spirit, user_id)
    .then(this.context.setSpiritList([...spiritList, spirit]))
    .then(this.context.setSpiritAddTrue())
    //.then(setTimeout(this.props.history.push('/cabinet'), 5000))
  }

  goBack = () => {
    this.context.setSpiritAddFalse();
    this.props.history.goBack();
  }

  render(){
    const { spiritAdd } = this.context
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
        {spiritAdd && <p className='spirit-add-alert'>Spirit Added to your Cabinet</p>}
        <button type='button' className='go-back' onClick={this.goBack} >Go Back</button>
      </main>
    )
  }
}

export default AddSpirit;