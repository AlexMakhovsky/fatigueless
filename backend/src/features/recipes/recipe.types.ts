import { z } from "zod";
import { createRecipeSchema } from "./recipe.schemas.js";

export type CreateRecipeInput = z.infer<typeof createRecipeSchema>;
