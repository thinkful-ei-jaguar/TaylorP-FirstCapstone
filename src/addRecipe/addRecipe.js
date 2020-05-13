import React, { Component } from "react";
import RecipeApiService from "../Services/recipe-api-service";
import TokenService from "../Services/token-service";
import RecipeListContext from "../Context/recipeListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./addRecipe.css";

class AddRecipe extends Component {
  static contextType = RecipeListContext;

  state = {
    ingredientsList: [],
    ingredients: false,
    prepShow: false,
    prep: "",
    spiritCat: 2,
    // icon: "rocksIcon",
  };

  handleRecipeSubmit = (e) => {
    e.preventDefault();
    const { ingredientsList, prep, spiritCat } = this.state;
    const recipe_ingredients = ingredientsList.join();
    const { userRecipeList } = this.context;
    // const { spirit_name, spirit_id } = e.target
    const user_id = TokenService.getUserId();
    const recipe = {
      recipe_name: e.currentTarget.recipeName.value,
      spirit_id: spiritCat,
      recipe_prep: prep,
      recipe_img: e.currentTarget.icon.value,
      recipe_ingredients,
    };
    RecipeApiService.postUserRecipe(user_id, recipe)
      .then(this.context.setUserRecipeList([...userRecipeList, recipe]))
      .then(this.context.setRecipeAdd())
      .then(this.clearFields(e));
  };

  clearFields = (e) => {
    this.setState({
      ingredientsList: [],
      ingredients: false,
      prepShow: false,
      prep: "",
    });
    e.currentTarget.recipeName.value = "";
  };

  goBack = () => {
    this.context.clearRecipeAdd();
    this.props.history.goBack();
  };

  handleDelete = (event) => {
    event.preventDefault();
    const newList = this.state.ingredientsList;
    const i = event.currentTarget.id;
    newList.splice(i, 1);
    this.setState({ ingredientsList: newList });
    if (newList.length === 0) {
      this.setState({ ingredients: false });
    }
  };

  handleSpiritCat = (event) => {
    event.preventDefault();
    this.setState({ spiritCat: Number(event.currentTarget.value) });
  };

  // handleIcon = (event) => {
  //   event.preventDefault();
  //   this.setState({ icon: event.currentTarget.value });
  // };

  handlePrep = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.setState({ prepShow: true, prep: event.currentTarget.value });
      event.currentTarget.value = "";
    } else return;
  };

  renderPrep = () => {
    const { prep } = this.state;
    return <p>{prep}</p>;
  };

  handleIngList = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();

      this.setState({
        ingredients: true,
        ingredientsList: [
          ...this.state.ingredientsList,
          event.currentTarget.value,
        ],
      });
      event.currentTarget.value = "";
    } else return;
  };

  renderIngList = () => {
    const { ingredientsList } = this.state;
    return ingredientsList.map((ingredient, i) => (
      <li key={i}>
        {ingredient}
        <button type="button" id={i} onClick={this.handleDelete}>
          X
        </button>
      </li>
    ));
  };

  render() {
    const { recipeAdd } = this.context;
    const { ingredients, prepShow } = this.state;
    return (
      <main className="add-recipe-main">
        <form className="add-recipe-form" onSubmit={this.handleRecipeSubmit}>
          <div className="namebar">
            <label htmlFor="recipeName">Recipe Name: </label>
            <input
              type="text"
              name="recipeName"
              id="recipe-name"
              placeholder="Ex: Manhattan 2.0"
              required
            />
          </div>
          <div className="recipe-ingredients">
            <label htmlFor="ingList">Ingredients: </label>
            <input
              type="text"
              name="ingList"
              id="ingList"
              placeholder="Ex: 1oz Tequila [then press ENTER]"
              default=""
              onKeyDown={this.handleIngList}
            />
            {ingredients && <ol>{this.renderIngList()}</ol>}
          </div>
          <div className="add-recipe-prep">
            <label htmlFor="prep">Preperation: </label>
            <textarea
              name="prep"
              id="prep"
              placeholder="I put the lime in the coconut... [then press ENTER]"
              onKeyDown={this.handlePrep}
            ></textarea>
            {prepShow && this.renderPrep()}
          </div>
          <div className="icon-select">
            <input
              type="radio"
              id="rocks"
              name="icon"
              value="rocksIcon"
              defaultChecked
              onChange={this.handleIcon}
            />
            <label htmlFor="rocks">
              <FontAwesomeIcon icon="glass-whiskey" />
            </label>
            <br />
            <input
              type="radio"
              id="cocktail"
              name="icon"
              value="cocktailIcon"
              onChange={this.handleIcon}
            />
            <label htmlFor="cocktail">
              <FontAwesomeIcon icon="glass-martini-alt" />
            </label>
          </div>
          <div className="recipe-select-button-div">
            <label htmlFor="spirit_id">Spirit:</label>
            <select
              name="spirit_id"
              id="spirit_id"
              onChange={this.handleSpiritCat}
            >
              <option value="2">Vodka</option>
              <option value="3">Gin</option>
              <option value="1">Tequila</option>
              <option value="4">Bourbon</option>
              <option value="7">Rye</option>
              <option value="5">Scotch</option>
              <option value="6">Amaro</option>
              <option value="8">Cognac</option>
              <option value="9">Rum</option>
            </select>
            <button type="submit">Save</button>
          </div>
        </form>
        {recipeAdd && (
          <p className="recipe-add-alert">Recipe Added to your Cabinet</p>
        )}
        <button type="button" className="go-back" onClick={this.goBack}>
          Go Back
        </button>
      </main>
    );
  }
}

export default AddRecipe;
