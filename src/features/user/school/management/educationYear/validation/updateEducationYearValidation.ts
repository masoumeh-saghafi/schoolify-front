import z from 'zod'

export const updateEducationYearValidationSchema = z.object({
  title: z.string().length(4, {
    message: 'سال وارد شده درست نیست'
  }),

})
