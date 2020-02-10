import React, { Component } from 'react';
import Nav from './Nav/nav-top'
import Footer from './Nav/footer'


class App extends Component {
  render(){
    return (
      <main className='app'>
        <Nav />
        <Footer />
      </main>
    )
  }
}

export default App;
