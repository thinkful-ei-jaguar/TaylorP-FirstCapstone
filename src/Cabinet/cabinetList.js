import React, { Component } from 'react'
import TokenService from '../Services/token-service'
import SpiritListContext from '../Context/spiritListContext'
import SpiritApiService from '../Services/spirit-api-service'
import CabinetCard from './cabinetCard'
import './cabinetList.css'

class CabinetList extends Component {
  static contextType = SpiritListContext
  componentDidMount() {
    const id = TokenService.getUserId()
    this.context.clearError()
    SpiritApiService.getSpirits(id)
      .then(this.context.setSpiritList)
      .catch(this.context.setError)
  }

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