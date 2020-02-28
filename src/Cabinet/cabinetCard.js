import React, { Component } from 'react'
import SpiritListContext from '../Context/spiritListContext'
import SpiritApiService from '../Services/spirit-api-service'
import './cabinetCard.css'

class CabinetCard extends Component {
  static contextType = SpiritListContext

  handleSpiritRemove = () => {
    const { id } = this.props.spirit
    const { user_id } = this.props.spirit
    const { spirit_id } = this.props.spirit

    const spirit = {id}
    
    SpiritApiService.deleteSpirit(spirit, user_id)
    .then(this.context.removeSpirit(id))
    .then(this.context.removeSpiritType(spirit_id))
  }

  renderIcon(spiritType) {
    let result;

    if(spiritType)
      result = spiritType.slice(0, 1)

   return <h2>{result}</h2>
  }

  render(){
    let { spirit } = this.props
    return (
      <li className='cabinet-li'>
        <div className='spirit-icon'>
          {this.renderIcon(spirit.spirit_cat)}
        </div>
        <div className='header-box'>
          <h3>{spirit.spirit_name}</h3>
        </div>
        <h4>{spirit.spirit_cat}</h4>
        <button type='button' onClick={this.handleSpiritRemove}>Remove Spirit</button>
      </li>
    )
  }
}

export default CabinetCard;