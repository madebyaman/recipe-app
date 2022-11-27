import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_URL}/${id}?key=${process.env.API_KEY}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
}

export async function loadSearchResults(query) {
  try {
    state.search.query = query;
    const data = await getJSON(
      `${API_URL}?search=${query}&key=${process.env.API_KEY}`
    );
    const { recipes } = data.data;
    state.search.results = recipes.map(recipe => {
      return {
        ...recipe,
        image: recipe.image_url,
      };
    });
    console.log(state);
  } catch (err) {
    throw err;
  }
}
