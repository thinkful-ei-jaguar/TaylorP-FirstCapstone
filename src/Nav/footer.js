import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './footer.css'
import TokenService from '../Services/token-service';
import LoginContext from '../Context/loginContext'

export default class Footer extends Component {
  static contextType = LoginContext

  handleLogout = () => {
    TokenService.clearAuthToken()
    TokenService.clearUserId()
    this.context.handleLoginState(false)
  }

  renderLogin() {
    return(
      <Link to={'/'}>
        <div>
          Login
        </div>
      </Link>
    )
  }

  renderLogout() {
    return(
      <Link
        onClick={this.handleLogout}
        to={'/'}>
        <div>
          Logout
        </div>
      </Link>
    )
  }
  render() {
    console.log('3', this.context)
    return (
      <>
      <footer className='footer'>
        <div className='footer-list'>
          <Link to={'/recipes'}>
            <div>
              Recipes
            </div>
          </Link>
          <Link to={'/cabinet'}>
            <div>
              My Cabinet
            </div>
          </Link>
          {this.context.loggedIn
          ? this.renderLogout()
          : this.renderLogin()}
        </div>
      </footer>
      <div className='space'></div>
      </>
    )
  }
}