import { statusOptions, typeOptions } from '../validation/baseTypes'

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
