import React, { Component } from 'react'

export const nullSpirit = {
  spirit_name: '',
  spirit_id: null
}

const SpiritContext = React.createContext({
  spirit: nullSpirit,
  error: null,
  setError: () => {},
  clearError: ()=> {},
  setSpiritList: () => {}
})

export default SpiritContext

export class SpiritProvider extends Component {
  state = {
    spirit: nullSpirit,
    error: null
  };

  setError = error => {
    console.log(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setSpirits = spirit => {
    this.setState({ spirit })
  }

  clearSpirits = () => {
    this.setState({ spirit: nullSpirit})
  }

  render() {
    const value = {
      spirit: this.state.spirit,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setSpiritList: this.setSpiritList
    }
    return (
      <SpiritContext.Provider value={value}>
        {this.props.children}
      </SpiritContext.Provider>
    )
  }
}