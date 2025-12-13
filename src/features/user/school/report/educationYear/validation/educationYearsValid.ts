import z from "zod";
import { educationYearTitleSchema } from "@schoolify/features/user/school/management/educationYear/validation/baseTypes";

export const validationSchema = z.object({
  title: educationYearTitleSchema,
  schoolId: z.string(),
});
