import z from "zod";
export const validationSchema = z.object({
  description: z
    .string()
    .min(2, 'حداقل باید 2 حرف باشد')
    .max(64, 'حداکثر باید 64حرف باشد '),
    amount: z.preprocess(
    val => {
      const num = Number(val);
      return isNaN(num) ? undefined : num;
    },
    z.number().refine(val => val !== undefined, {
      message: "مقدار باید عددی باشد"
    })
  ),
  costTypeId: z.string().min(1, 'انتخاب نوع هزینه الزامی است'),
  referenceRecordId: z.string()
})

