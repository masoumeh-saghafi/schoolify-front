import type { GridColDef } from '@mui/x-data-grid/models/colDef'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import type listAdminPaymentEntity from '../types/api/listAdminPaymentEntity'

const translateStatus: Record<string, string> = {
  processing: 'در حال پردازش',
  success: 'موفقیت‌آمیز',
  failure: 'ناموفق'
}

export const listAdminPymentColumns: GridColDef<
  BaseIdDataEntity<listAdminPaymentEntity>
>[] = [
  {
    field: 'title',
    resizable: false,
    headerName: 'عنوان',
    sortable: false,
    width: 150,
    editable: true,
    valueGetter: (_, row) => row.data?.title
  },
  {
    field: 'fullName',
    resizable: false,
    headerName: 'نام',
    sortable: false,
    width: 150,
    editable: true,
    valueGetter: (_, row) => row.data?.user.data?.fullName
  },
  {
    field: 'phoneNumber',
    resizable: false,
    headerName: 'شماره موبایل',
    filterable: true,
    sortable: false,
    width: 150,
    editable: true,
    valueGetter: (_, row) => row.data?.user.data?.phoneNumber
  },
  {
    field: 'amount',
    resizable: false,
    headerName: 'مبلغ',
    width: 150,
    editable: true,
    valueGetter: (_, row) => row.data?.amount.toLocaleString()
  },
  {
    field: 'status',
    resizable: false,
    headerName: 'وضعیت',
    filterable: true,
    width: 150,
    sortable: false,
    editable: true,
    renderCell: params => {
      const key = params.row.data?.status
      return key && translateStatus[key] ? translateStatus[key] : ''
    }
  },
  {
    field: 'paymentNumber',
    resizable: false,
    headerName: 'شناسه پرداخت',
    width: 150,
    sortable: false,
    editable: true,
    valueGetter: (_, row) => row.data?.paymentNumber
  },

  {
    field: 'createDate',
    resizable: false,
    headerName: 'ثبت  ',
    width: 150,
    editable: false,
    filterable: false,

    renderCell: params => <FormattedDate date={params.row.data?.createDate} />
  },
  {
    field: 'updateDate',
    resizable: false,
    headerName: ' بروزرسانی',
    width: 150,
    editable: false,
    filterable: false,
    renderCell: params => <FormattedDate date={params.row.data?.updateDate} />
  }
]
