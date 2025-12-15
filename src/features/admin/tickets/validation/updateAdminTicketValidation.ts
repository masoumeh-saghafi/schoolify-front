import z from 'zod'

export const updateAdminTicketValidationSchema = z.object({
  status: z.enum(['open', 'close']),
  type: z.enum(['support', 'sell'])
})
