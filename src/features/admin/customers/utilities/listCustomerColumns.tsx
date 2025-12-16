import type { GridColDef } from '@mui/x-data-grid/models/colDef'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import type ListCustomerEntity from '../types/api/ListcustomerEntity'

export const listCustomerColumns: GridColDef<
  BaseIdDataEntity<ListCustomerEntity>
>[] = [
  {
    field: 'fullName',
    resizable: false,
    headerName: 'نام',
    width: 150,
    sortable: false,
    editable: false,
    valueGetter: (_, row) => row.data?.fullName
  },
  {
    field: 'phoneNumber',
    resizable: false,
    headerName: 'شماره موبایل',
    sortable: false,
    width: 150,
    editable: false,
    valueGetter: (_, row) => row.data?.phoneNumber
  },
  {
    field: 'isActive',
    resizable: false,
    headerName: "وضعیت حساب",
    width: 150,
    editable: true,
  renderCell: params => {
  const active = params.row.data?.isActive
  return active ? 'فعال' : 'غیرفعال'
}

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
