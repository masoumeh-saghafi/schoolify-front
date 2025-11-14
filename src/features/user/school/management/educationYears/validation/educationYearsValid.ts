import z from 'zod'
export const validationSchema = z.object({
  title: z.string().length(4, {
    message: 'سال وارد شده درست نیست'
  }),
  schoolId: z.string()
})
