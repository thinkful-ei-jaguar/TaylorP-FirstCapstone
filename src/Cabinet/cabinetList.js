import React, { Component } from 'react'
import CabinetCard from './cabinetCard'
import './cabinetList.css'

class CabinetList extends Component {
  render(){
    return (
      <ul className='cabinetlist-list'>
        <CabinetCard />
        <CabinetCard />
        <CabinetCard />
        <CabinetCard />
        <CabinetCard />
      </ul>
    )
  }
}

export default CabinetList;