import React, { Component } from 'react'
import SpiritSearch from './spiritSearch'
import SpiritList from './spiritList'


class AddSpirit extends Component {
  render(){
    return (
      <main className='spirit_main'>
        <SpiritSearch />
        <SpiritList />
      </main>
    )
  }
}

export default AddSpirit;