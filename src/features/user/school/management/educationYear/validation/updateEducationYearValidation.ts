import z from "zod";
import { EducationYearYearTitleSchema } from "./baseTypes";

export const updateEducationYearValidationSchema = z.object({
  title: EducationYearYearTitleSchema,
});
