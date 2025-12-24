import type getAdminTicketEntity from '@schoolify/features/admin/tickets/types/api/getAdminTicketEntity';
interface AdminTicketInfoField {
  label: string
  value?: string | number | null
}

export const adminTicketInfoData = (
  data: getAdminTicketEntity | null | undefined,
 typeOptions: { id: string; title: string }[],
  statusOptions: { id: string; title: string }[]
): AdminTicketInfoField[] => [
  {
    label: 'عنوان',
    value: data?.title
  },
  {
    label: 'وضعیت',
    value: statusOptions.find(opt => opt.id === data?.status)?.title
  },
  {
    label: 'واحد',
    value: typeOptions.find(opt => opt.id === data?.type)?.title
  },
  {
    label: 'مدرسه',
    value: data?.school?.data?.title
  }
]
