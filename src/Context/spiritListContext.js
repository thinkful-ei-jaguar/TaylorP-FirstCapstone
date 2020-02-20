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
    spiritTypes: [],
    error: null
  }

  setSpiritList = (spiritList) => {
    this.setState({ spiritList })
  }

  setSpiritTypes = (newSpirit) => {
    this.setState({
      spiritTypes: newSpirit
    })
  }

  setError = (error) => {
    console.log(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  removeSpirit = (id) => {
    const newSpirits = this.state.spiritList.filter(s => s.id !== id)
    this.setState({ spiritList: newSpirits })
  }

  render() {
    const value = {
      spiritList: this.state.spiritList,
      spiritTypes: this.state.spiritTypes,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setSpiritList: this.setSpiritList,
      removeSpirit: this.removeSpirit,
      setSpiritTypes: this.setSpiritTypes
    }
    return (
      <SpiritListContext.Provider value={value}>
        {this.props.children}
      </SpiritListContext.Provider>
    )
  }
}