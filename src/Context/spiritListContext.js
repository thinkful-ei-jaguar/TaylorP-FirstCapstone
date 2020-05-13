import React, { Component } from "react";

const SpiritListContext = React.createContext({
  spiritList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setSpiritList: () => {},
});

export default SpiritListContext;

export class SpiritListProvider extends Component {
  state = {
    spiritList: [],
    spiritTypes: [],
    spiritAdd: false,
    error: null,
  };

  setSpiritList = (spiritList) => {
    this.setState({ spiritList });
  };

  removeElement(arr, elem) {
    let idx = arr.indexOf(elem);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
  }

  removeSpiritType = (spiritId) => {
    this.removeElement(this.state.spiritTypes, spiritId);
  };

  setSpiritTypes = (newSpirit) => {
    this.setState({
      spiritTypes: newSpirit,
    });
  };

  setError = (error) => {
    console.log(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  removeSpirit = (id) => {
    const newSpirits = this.state.spiritList.filter((s) => s.id !== id);
    this.setState({ spiritList: newSpirits });
  };

  setSpiritAddTrue = () => {
    this.setState({ spiritAdd: true });
  };

  setSpiritAddFalse = () => {
    this.setState({ spiritAdd: false });
  };

  render() {
    const value = {
      spiritList: this.state.spiritList,
      spiritTypes: this.state.spiritTypes,
      spiritAdd: this.state.spiritAdd,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setSpiritList: this.setSpiritList,
      removeSpirit: this.removeSpirit,
      setSpiritTypes: this.setSpiritTypes,
      removeSpiritType: this.removeSpiritType,
      setSpiritAddTrue: this.setSpiritAddTrue,
      setSpiritAddFalse: this.setSpiritAddFalse,
    };
    return (
      <SpiritListContext.Provider value={value}>
        {this.props.children}
      </SpiritListContext.Provider>
    );
  }
}
