import React, { Component } from 'react'

const SpiritListContext = React.createContext({
  spiritList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setSpiritList: () => {}
})

export default SpiritListContext

export class SpiritListProvider extends Component {
  state = {
    spiritList: [],
    error: null
  }

  setSpiritList = (spiritList) => {
    this.setState({ spiritList })
  }

  setError = (error) => {
    console.log(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      spiritList: this.state.spiritList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setSpiritList: this.setSpiritList
    }
    return (
      <SpiritListContext.Provider value={value}>
        {this.props.children}
      </SpiritListContext.Provider>
    )
  }
}