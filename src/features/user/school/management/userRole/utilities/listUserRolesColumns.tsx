import FormattedDate from '@schoolify/core/components/common/FormattedDate'
import type ListUserRolesEntity from '../types/api/ListUserRolesEntity'
import type { GridColDef } from '@mui/x-data-grid/models/colDef'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
const roleLabels: Record<string, string> = {
  manager: 'معاون',
  reporter: 'ناظر',
  owner: 'مدیر'
}
export const listUserRolesColumns: GridColDef<
  BaseIdDataEntity<ListUserRolesEntity>
>[] = [
  {
    field: 'fullName',
    resizable: false,
    headerName: 'نام',
    width: 150,
    sortable: false,
    editable: false,
    valueGetter: (_, row) => row.data?.user.fullName
  },
  {
    field: 'phoneNumber',
    resizable: false,
    headerName: 'شماره موبایل',
    sortable: false,
    width: 150,
    editable: false,
    valueGetter: (_, row) => row.data?.user.phoneNumber
  },
  {
    field: 'role',
    resizable: false,
    headerName: 'دسترسی',
    width: 150,
    editable: true,
    renderCell: params => {
      const key = params.row.data?.role
      return key && roleLabels[key] ? roleLabels[key] : ''
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
