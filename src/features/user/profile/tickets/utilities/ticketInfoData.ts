import type UserTicketEntity from '../types/api/UserTicketEntity'
interface TicketInfoField {
  label: string
  value?: string | number | null
}

export const ticketInfoData = (
data: UserTicketEntity | null | undefined,
  unitOptions: { id: string; title: string }[]
) : TicketInfoField[] =>[
    {
    label: 'مدرسه',
    value: data?.school,
  
  },
  {
    label: 'عنوان',
    value: data?.title,
  
  },
  {
    label: 'واحد',
    value:
      unitOptions.find(opt => opt.id === data?.type)?.title,
  
  }
]
