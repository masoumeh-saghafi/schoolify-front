import type { GridColDef } from '@mui/x-data-grid/models/colDef'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'
import type ListEducationGradeEntity from '@schoolify/features/user/school/management/class/types/api/ListClassEntity'

export const listClassColumns: GridColDef<
  BaseIdDataEntity<ListEducationGradeEntity>
>[] = [
  {
    field: 'title',
    resizable: false,
    headerName: 'کلاس',
    width: 150,
    editable: true,
    valueGetter: (_, row) => row.data?.title
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
