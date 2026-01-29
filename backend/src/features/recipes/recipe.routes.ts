import { Router } from "express";
import { getRecipes, createRecipe } from "./recipe.controller.js";

const recipeRouter = Router();
console.log("✅ recipe routes loaded");
recipeRouter.get("/", getRecipes);
recipeRouter.post("/", createRecipe);

export default recipeRouter;
