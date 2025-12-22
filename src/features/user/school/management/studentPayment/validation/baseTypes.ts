import z from "zod";

export const studentPymentTitleSchema = z.object({
  description: z
    .string()
    .min(2, "باید حداقل 2 حرف وارد کنید")
    .max(64, "باید حداکثر 64 حرف وارد کنید"),
  amount: z.preprocess(
    (val: string) => {
      const cleanedVal = val;
      const num = Number(cleanedVal);
      return isNaN(num) ? undefined : num;
    },
    z.number("مقدار باید عددی باشد").refine((val) => val !== undefined, {
      message: "مقدار باید عددی باشد",
    })
  ),
  paymentNumber: z.string().max(32, "باید حداکثر 32 حرف وارد کنید"),
});
