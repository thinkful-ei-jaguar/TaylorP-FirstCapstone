import React, { Component } from 'react'
import SpiritListContext from '../Context/spiritListContext'
import CabinetCard from './cabinetCard'
import './cabinetList.css'

class CabinetList extends Component {
  static contextType = SpiritListContext

  renderCabinetList() {
    const { spiritList = [] } = this.context
    return spiritList.map(spirit => 
      <CabinetCard
      key={spirit.id}
      spirit={spirit}
      />
      )
  }

  render(){
    return (
      <ul className='cabinetlist-list'>
        {this.renderCabinetList()}
      </ul>
    )
  }
}

export default CabinetList;