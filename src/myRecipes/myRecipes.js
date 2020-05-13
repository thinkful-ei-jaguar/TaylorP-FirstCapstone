import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeListContext from "../Context/recipeListContext";
import RecipeApiService from "../Services/recipe-api-service";
import "./myRecipes.css";
import TokenService from "../Services/token-service";
import UserRecipeCard from "../userRecipesCard/userRecipesCard";

class myRecipes extends Component {
  static contextType = RecipeListContext;
  constructor(props) {
    super(props);
    this.state = {
      userRecipes: [],
    };
  }

  componentDidMount() {
    const user_id = TokenService.getUserId();
    this.context.clearError();
    RecipeApiService.getUserRecipeByUser(user_id)
      .then(this.context.setUserRecipeList)
      .catch(this.context.setError);
  }

  renderRecipes() {
    const { userRecipeList = [] } = this.context;
    return userRecipeList.map((recipe) => (
      <UserRecipeCard key={recipe.id} recipe={recipe} />
    ));
  }

  render() {
    return (
      <main className="recipe_main" aria-live="polite">
        <h2>Your Recipes</h2>
        <Link to={"/add-recipe"}>Add New Recipe</Link>
        <ul className="recipe-list">{this.renderRecipes()}</ul>
      </main>
    );
  }
}

export default myRecipes;
