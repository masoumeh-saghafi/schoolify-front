import type { GridColDef } from '@mui/x-data-grid/models/colDef'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'
import type ListCostEntity from '../types/api/ListCostEntity'

const referenceTypeLabels: Record<string, string> = {
  educationYear: 'سال تحصیلی',
  educationLevel: 'مقطع تحصیلی',
  educationGrade: 'پایه تحصیلی',
  class: 'کلاس',
  student: 'دانش‌آموز'
}

export const listCostColumns: GridColDef<
  BaseIdDataEntity<ListCostEntity>
>[] = [
  {
    field: 'title',
    resizable: false,
    headerName: 'عنوان هزینه',
    filterable: true,
    width: 150,
    editable: true,
    valueGetter: (_, row) => row.data?.costType.data?.title
  },
  {
    field: 'referenceType',
    resizable: false,
    headerName: 'نوع اجرا',
    sortable: false,
    filterable: false,
    width: 150,
    editable: false,
    renderCell: params => {
      const key = params.row.data?.costType.data?.referenceType
      if (!key) return '-'
      return referenceTypeLabels[key] || key
    }
  },
  {
    field: 'baseAmount',
    resizable: false,
    filterable: false,
    headerName: 'مبلغ پایه هزینه',
    width: 150,
    editable: false,
    valueGetter: (_, row) =>
      row.data?.costType.data?.baseAmount.toLocaleString()
  },
  {
    field: 'referenceTitle',
    resizable: false,
    headerName: 'رکورد',
    filterable: false,
    width: 150,
    editable: false,
    valueGetter: (_, row) => row.data?.referenceTitle
  },
  {
    field: 'amount',
    resizable: false,
    headerName: 'مبلغ متغیر',
    width: 150,
    filterable: false,
    editable: true,
    valueGetter: (_, row) => row.data?.amount.toLocaleString()
  },
  {
    field: 'description',
    filterable: false,
    resizable: false,
    headerName: 'توضیحات',
    width: 150,
    editable: true,
    valueGetter: (_, row) => row.data?.description
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
