import z from 'zod'

export const updateAdminTicketValidationSchema = z.object({
  status: z.enum(['open', 'close'], 'لطفا یک وضعیت را انتخاب نمایید '),
  type: z.enum(['support', 'sell'], 'لطفا یک واحد را انتخاب نمایید ')
})
