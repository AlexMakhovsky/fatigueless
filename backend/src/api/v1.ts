import { Router } from "express";
import recipeRouter from "../features/recipes/recipe.routes.js";

export const v1Router = Router();

v1Router.use("/recipes", recipeRouter);
