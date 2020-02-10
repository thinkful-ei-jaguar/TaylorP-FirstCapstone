import React, { Component } from 'react'
import './spiritCard.css'

class SpiritCard extends Component {
  render(){
    return (
      <li className='spirit-card-li'>
        <div>img</div>
        <h2>Espolon</h2>
        <h3>Tequila</h3>
      </li>
    )
  }
}

export default SpiritCard;