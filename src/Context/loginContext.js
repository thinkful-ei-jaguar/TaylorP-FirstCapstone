import React, { Component } from 'react'
import TokenService from '../Services/token-service'

export const LoginContext = React.createContext({
  loggedIn: false,
  error: null,
  handleLoginState: () => {}
})

export default LoginContext

export class LoginProvider extends Component {
  state = {
    loggedIn: TokenService.hasAuthToken(),
    error: null
  }

  handleLoginState = (isLoggedIn) => {
    this.setState({
      loggedIn: isLoggedIn
    })
  }
  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      error: this.state.error,
      handleLoginState: this.handleLoginState
    }
    return(
      <LoginContext.Provider value={value}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}