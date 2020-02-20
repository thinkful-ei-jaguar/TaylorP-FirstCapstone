import React, { Component } from 'react'
import AuthApiService from '../Services/auth-api-service'
import TokenService from '../Services/token-service'
import './landing.css'

export default class Landing extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  openTab(e) {
    let tabName = e.currentTarget.value;
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName('tabContent');
    for ( i=0; i< tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }

    tabLinks = document.getElementsByClassName('tabLinks');
    for (i=0; i<tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace('active', '')
    }

    document.getElementById(tabName).style.display = 'block';
    e.currentTarget.className += 'active';
  }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = e.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
    .then(res => {
      user_name.value = ''
      password.value = ''
      TokenService.saveAuthToken(res.authToken)
      TokenService.saveUserId(res.user_id)
      this.props.onLoginSuccess()
      this.props.history.push('/cabinet')
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  handleRegisterSubmit = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { user_name, password, nickname } = e.target

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      nickname: nickname.value
    })
      .then(user=>{
        user_name.value = ''
        password.value = ''
        nickname.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        console.log(res)
        this.setState({ error: res.error})
      })
    this.handleLoginAfterRegister(user_name.value, password.value)
  }

  handleLoginAfterRegister= (user_name, password) => {
    console.log(user_name, password)
    AuthApiService.postLogin({
      user_name,
      password
    })
    .then(res => {
      TokenService.saveAuthToken(res.authToken)
      this.props.onLoginSuccess()
      this.props.history.push('/cabinet')
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  componentDidMount() {
    document.getElementById('defaultOpen').click();
  }

  render(){
    const { error } = this.state
    return(
      <main className='landing-main'>
        <div className="tab">
          <button className="tabLinks" id='defaultOpen' value='Login' onClick={this.openTab}>Login</button>
          <button className="tabLinks" value='Register' onClick={this.openTab}>Register</button>
        </div>
        <div id="Login" className="tabContent">
          <h3>Login</h3>
          <form className='login-form' onSubmit={this.handleSubmitJwtAuth}>
            <div role='alert'>
              {error && <p className='error'>{error}</p>}
            </div>
            <div className='user_name'>
              <label htmlFor='login-form-user_name'>
                User Name: 
              </label>
              <input type='text' name='user_name' id='login-form-user_name' required></input>
            </div>
            <div className='password'>
              <label htmlFor='login-form-password'>
                Password: 
              </label>
              <input type='password' name='password' id='login-form-password' required></input>
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>

        <div id="Register" className="tabContent">
          <h3>Register</h3>
          <form className='register-form' onSubmit={this.handleRegisterSubmit}>
            <div role='alert'>
              {error && <p className='error'>{error}</p>}
            </div>
            <div className='user_name'>
              <label htmlFor='register-form-user_name'>
                User Name: 
              </label>
              <input type='text' name='user_name' id='register-form-user_name' required></input>
            </div>
            <div className='password'>
              <label htmlFor='register-form-password'>
                Password: 
              </label>
              <input type='password' name='password' id='register-form-password' required></input>
            </div>
            <div className='nickname'>
              <label htmlFor='register-form-nickname'>
                Nickname: 
              </label>
              <input type='text' name='nickname' id='register-form-nickname' required></input>
            </div>
            <button type='submit'>Register</button>
          </form>
        </div>
      </main>
    )
  }
}