import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CabinetList from './cabinetList'
import './cabinet.css'

class Cabinet extends Component {
  render(){
    return (
      <main className='cabinet-main'>
        <h2>Welcome to your Cabinet!</h2>
        <section className='cabinet-nav'>
          <Link to={'/favorites'}>
            Favorites
          </Link>
          {' '}
          <Link to={'/add-spirit'}>
            Add Spirit
          </Link>
        </section>
        <CabinetList />
      </main>
    )
  }
}

export default Cabinet;