import z from "zod";

export const fullNameSchema = z.object({
  FirstName: z
    .string()
    .min(2, {
      message: 'تعداد حروف باید بیشتر از 2 حرف باشد'
    })
    .max(64, { message: 'تعداد حروف باید کمتر از 64 حرف باشد' }),

  LastName: z
    .string()
    .min(2, {
      message: 'تعداد حروف باید بیشتر از 2 حرف باشد'
    })
    .max(64, { message: 'تعداد حروف باید کمتر از 64 حرف باشد' })
})
