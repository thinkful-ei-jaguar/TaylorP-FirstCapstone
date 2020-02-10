import React, { Component } from 'react'

import './cabinetCard.css'

class CabinetCard extends Component {
  render(){
    return (
      <li className='cabinet-li'>
        <div>img</div>
        <h2>Espolon</h2>
        <h3>Tequila</h3>
      </li>
    )
  }
}

export default CabinetCard;