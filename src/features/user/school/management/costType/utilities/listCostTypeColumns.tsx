import type { GridColDef } from '@mui/x-data-grid/models/colDef'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'
import type ListEducationGradeEntity from '../types/api/ListCostTypeEntity'

const referenceTypeLabels: Record<string, string> = {
  educationYear: 'سال تحصیلی',
  educationLevel: 'مقطع تحصیلی',
  educationGrade: 'پایه تحصیلی',
  class: 'کلاس',
  student: 'دانش‌آموز'
}

export const listCostTypeColumns: GridColDef<
  BaseIdDataEntity<ListEducationGradeEntity>
>[] = [
  {
    field: 'title',
    resizable: false,
    headerName: 'عنوان هزینه',
    width: 150,
    editable: true,
    valueGetter: (_, row) => row.data?.title
  },
  {
    field: 'baseAmount',
    resizable: false,
    headerName: ' هزینه ثابت',
    width: 150,
    filterable: false,
    editable: true,
    valueGetter: (_, row) => row.data?.baseAmount.toLocaleString()
  },
  {
    field: 'isActive',
    resizable: false,
    headerName: ' وضعیت',
    width: 150,
    editable: true,
    filterable: false,
    renderCell: params => {
      const active = params.row.data?.isActive
      return active ? 'فعال' : 'غیرفعال'
    }
  },
  {
    field: 'referenceType',
    resizable: false,
    headerName: '  عنوان اجرا',
    width: 150,
    sortable: false,
    editable: false,
    filterable: false,
    renderCell: params => {
      const key = params.row.data?.referenceType
      if (!key) return '-'
      return referenceTypeLabels[key] || key
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
    headerName: '  بروزرسانی',
    width: 150,
    editable: false,
    filterable: false,
    renderCell: params => <FormattedDate date={params.row.data?.updateDate} />
  }
]
