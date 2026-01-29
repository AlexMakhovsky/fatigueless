import { Request, Response } from "express";
import { recipeService } from "./recipe.service.js";
import { createRecipeSchema } from "./recipe.schemas.js";

export async function getRecipes(
  _req: Request,
  res: Response
) {
  try {
    const recipes = await recipeService.getAllRecipes();
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
}

export async function createRecipe(
  req: Request,
  res: Response
) {
  try {
    const input = createRecipeSchema.parse(req.body);

    const recipe = await recipeService.createRecipe(input);
    res.status(201).json(recipe);
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ error: "Failed to create recipe" });
  }
}
