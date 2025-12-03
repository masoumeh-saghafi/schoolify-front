import z from "zod";

const DateValidation = new RegExp(
  `^(13|14)\\d{2}\\/(0[1-9]|1[0-2])\\/(0[1-9]|[12][0-9]|3[01])$`
);

export const validationSchema = z.object({
  description: z
    .string()
    .min(2, "باید حداقل 2 کاراکتر وارد کنید")
    .max(64, "باید حداکثر 64 کاراکتر وارد کنید"),
  amount: z.preprocess(
    (val) => {
      const num = Number(val);
      return isNaN(num) ? undefined : num;
    },
    z.number("مقدار باید عددی باشد").refine((val) => val !== undefined, {
      message: "مقدار باید عددی باشد",
    })
  ),
  paymentNumber: z.string(),
  studentId: z.string().min(1, "شناسه دانش آموز الزامی است"),
  paymentDate: z.string().regex(DateValidation, {
    message: "لطفا تاریخ را صحیح وارد کنید",
  }),
  educationYearId: z.string().min(1, "سال تحصیلی الزامی است"),
});
