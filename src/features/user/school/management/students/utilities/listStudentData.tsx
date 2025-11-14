import type { GridColDef } from '@mui/x-data-grid/models/colDef'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import type ListStudentsEntity from '@schoolify/features/user/school/management/students/types/api/ListStudentsEntity'
import { identityTypeOptions } from '@schoolify/features/user/school/management/students/validation/identityType'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'

export const listStudentData: GridColDef<BaseIdDataEntity<ListStudentsEntity>>[] = [
  {
    field: 'firstName',
    resizable: false,
    headerName: 'نام',
    width: 150,
    editable: true,
    sortable: true,
    valueGetter: (_, row) => row.data?.firstName
  },
  {
    field: 'lastName',
    resizable: false,
    headerName: 'نام خانوادگی',
    width: 150,
    editable: true,
    sortable: true,
    valueGetter: (_, row) => row.data?.lastName
  },
  {
    field: 'fatherName',
    resizable: false,
    headerName: 'نام پدر',
    width: 150,
    sortable: false,
    editable: true,
    valueGetter: (_, row) => row.data?.fatherName
  },
  {
    field: 'parentPhoneNumber',
    resizable: false,
    headerName: 'شماره موبایل والدین',
    width: 150,
    sortable: false,
    editable: true,
    valueGetter: (_, row) => row.data?.parentPhoneNumber
  },
  {
    field: 'identityCode',
    resizable: false,
    headerName: 'شناسه هویتی',
    width: 150,
    sortable: false,
    editable: true,
    valueGetter: (_, row) => row.data?.identityCode
  },
  {
    field: 'identityType',
    resizable: false,
    headerName: 'هویت',
    width: 100,
    sortable: false,
    valueGetter: (_, row) =>
      identityTypeOptions.find(option => option.key === row.data?.identityType)
        ?.value
  },
  {
    field: 'createDate',
    resizable: false,
    headerName: ' ثبت',
    width: 150,
    filterable: false,
    editable: false,
    sortable: true,
    renderCell: params => <FormattedDate date={params.row.data?.createDate} />
  },
  {
    field: 'updateDate',
    filterable: false,
    resizable: false,
    headerName: ' بروزرسانی',
    editable: false,
    width: 150,
    sortable: true,
    renderCell: params => <FormattedDate date={params.row.data?.updateDate} />
  }
]
