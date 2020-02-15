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
      <li>
        <Link to={'/'}>
          Login
        </Link>
      </li>
    )
  }

  renderLogout() {
    return(
      <li>
        <Link
        to={'/'}
        onClick={this.handleLogout}>
          Logout
        </Link>
      </li>
    )
  }
  render() {
    return (
      <>
      <footer className='footer'>
        <ul className='footer-list'>
          <li>
            <Link to={'/recipes'}>
              Recipes
            </Link>
          </li>
          <li>
            <Link to={'/cabinet'}>
              My Cabinet
            </Link>
          </li>
          {TokenService.hasAuthToken()
          ? this.renderLogout()
          : this.renderLogin()}
        </ul>
      </footer>
      <div className='space'></div>
      </>
    )
  }
}