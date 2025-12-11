import z from "zod";
import { baseStudentFieldsSchema } from "@schoolify/features/user/school/management/student/validation/baseTypes";

export const addStudentValidationSchema = baseStudentFieldsSchema.safeExtend({
  schoolId: z.string()
})
