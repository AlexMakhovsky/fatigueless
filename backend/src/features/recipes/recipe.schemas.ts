import { z } from "zod";

export const createRecipeSchema = z.object({
  name: z.string().min(1),
  calories: z.number().int().positive(),
  protein: z.number().int().nonnegative(),
  carbs: z.number().int().nonnegative(),
  fat: z.number().int().nonnegative(),
  tags: z.array(z.string()),
  instructions: z.string().optional()
});
