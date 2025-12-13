import z from 'zod'

export const baseCostFieldsSchema = z.object({
  description: z
    .string()
    .min(2, 'حداقل باید 2 حرف باشد')
    .max(64, 'حداکثر باید 64حرف باشد '),
  amount: z.preprocess(
    val => {
      const num = Number(val)
      return isNaN(num) ? undefined : num
    },
    z
      .number({
        message: 'مقدار باید عددی باشد'
      })
      .refine(val => val !== undefined, {
        message: 'مقدار باید عددی باشد'
      })
  )
})
