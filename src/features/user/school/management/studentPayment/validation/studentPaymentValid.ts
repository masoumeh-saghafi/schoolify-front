import z from "zod";
import { studentPymentTitleSchema } from "@schoolify/features/user/school/management/studentPayment/validation/baseTypes";

const DateValidation = new RegExp(
  `^(13|14)\\d{2}\\/(0[1-9]|1[0-2])\\/(0[1-9]|[12][0-9]|3[01])$`
);

export const validationSchema = studentPymentTitleSchema.safeExtend({
  studentId: z.string().min(1, "شناسه دانش آموز الزامی است"),
  paymentDate: z.string().regex(DateValidation, {
    message: "لطفا تاریخ را صحیح وارد کنید",
  }),
  educationYearId: z.string().min(1, "سال تحصیلی الزامی است"),
});
