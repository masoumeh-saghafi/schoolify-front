import z from "zod";
import { EducationYearYearTitleSchema } from "./baseTypes";

export const validationSchema = z.object({
  title: EducationYearYearTitleSchema,
  schoolId: z.string(),
});
