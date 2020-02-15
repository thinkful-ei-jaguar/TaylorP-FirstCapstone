import React, { Component } from 'react'

const RecipeListContext = React.createContext({
  recipeList: [],
  error: null,
  setError: () => {},
  clearError: ()=> {},
  setRecipeList: () => {}
})

export default RecipeListContext

export class RecipeListProvider extends Component {
  state = {
    recipeList: [],
    error: null
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setRecipeList = (recipeList) => {
    this.setState({ recipeList })
  }

  clearRecipeList = () => {
    this.setState({ recipeList: [] })
  }

  render() {
    const value = {
      recipeList: this.state.recipeList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setRecipeList: this.setRecipeList,
      clearRecipeList: this.clearRecipeList
    }
    return (
      <RecipeListContext.Provider value={value}>
        {this.props.children}
      </RecipeListContext.Provider>
    )
  }
}