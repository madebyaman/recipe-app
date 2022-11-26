import dotenv from 'dotenv';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { state, loadRecipe } from './model.js';
import recipeView from './views/recipeView.js';
dotenv.config();

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
    alert(err);
  }
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
}
init();
