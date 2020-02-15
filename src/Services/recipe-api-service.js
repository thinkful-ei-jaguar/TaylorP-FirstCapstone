import config from '../config'

const RecipeApiService = {
  getRecipes() {
    return fetch(`${config.API_ENDPOINT}/recipes`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getRecipe(id) {
    return fetch(`${config.API_ENDPOINT}/recipes/${id}`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getRecipeBySearch(keyword, filter) {
    return fetch(`${config.API_ENDPOINT}/recipes?keyword=${keyword}&filter=${filter}`)
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}

export default RecipeApiService