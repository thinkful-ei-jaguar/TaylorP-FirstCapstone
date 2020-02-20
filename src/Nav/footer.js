import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './footer.css'
import TokenService from '../Services/token-service';

export default class Footer extends Component {
  handleLogout = () => {
    TokenService.clearAuthToken()
    TokenService.clearUserId()
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
          {TokenService.hasAuthToken()
          ? this.renderLogout()
          : this.renderLogin()}
        </div>
      </footer>
      <div className='space'></div>
      </>
    )
  }
}