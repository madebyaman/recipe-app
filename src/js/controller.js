import dotenv from 'dotenv';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { state, loadRecipe, loadSearchResults } from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
dotenv.config();

if (module.hot) {
  module.hot.accept();
}

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // Load Recipe
    await loadRecipe(id);
    const { recipe } = state;

    // Rendering data
    recipeView.render(recipe);
  } catch (err) {
    console.log('catching');
    recipeView.renderErrorMessage(err);
  }
}

async function controlSearch() {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    await loadSearchResults(query);
    resultsView.render(state.search.results);
  } catch (err) {
    console.error(err);
  }
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addSearchHandler(controlSearch);
}
init();
