import type { GridColDef } from '@mui/x-data-grid/models/colDef'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'
import type ListStudentPaymentEntity from '@schoolify/features/user/school/management/studentPayment/types/api/ListStudentPaymentEntity'

export const listStudentPaymentColumns: GridColDef<
  BaseIdDataEntity<ListStudentPaymentEntity>
>[] = [
  {
    field: 'amount',
    resizable: false,
    headerName: 'مبلغ',
    width: 150,
    editable: true,
    filterable: false,

    valueGetter: (_, row) => row.data?.amount.toLocaleString()
  },
  {
    field: 'description',
    resizable: false,
    headerName: 'توضیحات',
    width: 150,
    sortable: false,
    editable: true,
    filterable: false,

    valueGetter: (_, row) => row.data?.description
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
    field: 'educationYearTitle',
    resizable: false,
    headerName: 'سال تحصیلی',
    width: 150,
    editable: false,
    valueGetter: (_, row) => row.data?.educationYear?.data?.title
  },
  {
    field: 'paymentDate',
    resizable: false,
    headerName: 'تاریخ پرداخت',
    width: 150,
    editable: true,
    filterable: false,

    valueGetter: (_, row) => row.data?.paymentDate
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
    headerName: '  بروزرسانی',
    width: 150,
    editable: false,
    filterable: false,
    renderCell: params => <FormattedDate date={params.row.data?.updateDate} />
  }
]
