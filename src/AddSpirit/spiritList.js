import React, { Component } from 'react'
import SpiritCard from './spiritCard'
import './spiritList.css'


class SpiritList extends Component {
  render(){
    return (
      <ul className='spirit-list' aria-live='polite'>
        <SpiritCard />
        <SpiritCard />
        <SpiritCard />
        <SpiritCard />
        <SpiritCard />
        <SpiritCard />
      </ul>
    )
  }
}

export default SpiritList;