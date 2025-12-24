import { statusOptions, typeOptions } from '@schoolify/features/admin/tickets/validation/baseTypes'

export const updateAdminTicketData = [
  {
    name: 'status',
    label: 'وضعیت',
    options: statusOptions
  },
  {
    name: 'type',
    label: 'واحد',
    options: typeOptions
  }
]
