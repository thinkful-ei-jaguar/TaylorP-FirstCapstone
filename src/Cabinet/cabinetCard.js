import React, { Component } from 'react'

import './cabinetCard.css'

class CabinetCard extends Component {
  render(){
    let { spirit } = this.props
    return (
      <li className='cabinet-li'>
        <div>img</div>
        <h2>{spirit.spirit_name}</h2>
        <h3>{spirit.spirit_cat}</h3>
      </li>
    )
  }
}

export default CabinetCard;