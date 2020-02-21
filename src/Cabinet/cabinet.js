import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CabinetList from './cabinetList'
import CabinetRecipeList from './cabinetRecipeList'
import TokenService from '../Services/token-service'
import SpiritListContext from '../Context/spiritListContext'
import SpiritApiService from '../Services/spirit-api-service'
import './cabinet.css'

class Cabinet extends Component {
  static contextType = SpiritListContext
  componentDidMount() {
    let spiritTypes =[];
    const id = TokenService.getUserId()
    this.context.clearError()
    SpiritApiService.getSpirits(id)
      .then(res => {
        res.map(r => {
          return spiritTypes.push(r.spirit_id)
        })
        return res
      })
      .then(this.context.setSpiritList)
      .catch(this.context.setError)
      this.context.setSpiritTypes(spiritTypes)
  }
  render(){
    return (
      <main className='cabinet-main'>
        <h2>Welcome to your Cabinet!</h2>
        <section className='cabinet-nav'>
          <Link to={'/favorites'}>
            Favorites
          </Link>
          {' | '}
          <Link to={'/add-spirit'}>
            Add Spirit
          </Link>
        </section>
        <CabinetList />
        <CabinetRecipeList spiritTypes={this.context.spiritTypes} />
      </main>
    )
  }
}

export default Cabinet;