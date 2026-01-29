import { prisma } from "../../lib/prisma.js";
import { CreateRecipeInput } from "./recipe.types.js";

export const recipeRepository = {
  findAll() {
    return prisma.recipe.findMany();
  },

  create(data: CreateRecipeInput) {
    return prisma.recipe.create({ data });
  }
};
