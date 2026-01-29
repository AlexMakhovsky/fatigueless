import { recipeRepository } from "./recipe.repository.js";
import { CreateRecipeInput } from "./recipe.types.js";

export const recipeService = {
  getAllRecipes() {
    return recipeRepository.findAll();
  },

  createRecipe(input: CreateRecipeInput) {
    // business rules live here later
    return recipeRepository.create(input);
  }
};
