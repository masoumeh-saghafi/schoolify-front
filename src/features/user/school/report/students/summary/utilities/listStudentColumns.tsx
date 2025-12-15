import type { GridColDef } from '@mui/x-data-grid/models/colDef'

import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'

import type ListSummaryStudentReportEntity from '../types/api/ListSummaryStudentReportEntity'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'

export const listSummaryStudentReportColumns: GridColDef<
  BaseIdDataEntity<ListSummaryStudentReportEntity>
>[] = [
  {
    field: 'firstName',
    resizable: false,
    headerName: 'نام',
    width: 150,
    valueGetter: (_, row) => row.data?.firstName
  },
  {
    field: 'lastName',
    resizable: false,
    headerName: 'نام خانوادگی',
    width: 150,
    valueGetter: (_, row) => row.data?.lastName
  },
  {
    field: 'fatherName',
    resizable: false,
    headerName: 'نام پدر',
    width: 150,
    valueGetter: (_, row) => row.data?.fatherName
  },

  {
    field: 'classTitle',
    resizable: false,
    headerName: 'کلاس',
    width: 150,
    valueGetter: (_, row) => row.data?.class.data?.title
  },
  {
    field: 'totalPaymentAmountWithoutDiscount',
    resizable: false,
    headerName: 'شهریه کل',
    width: 150,
    valueGetter: (_, row) =>
      row.data?.debtStatus.totalPaymentAmountWithoutDiscount.toLocaleString()
  },
  {
    field: 'totalDiscount',
    resizable: false,
    headerName: ' تخفیف',
    width: 150,
    valueGetter: (_, row) => row.data?.debtStatus.totalDiscount.toLocaleString()
  },
  {
    field: 'totalPaymentAmount',
    resizable: false,
    headerName: ' جمع کل',
    width: 150,
    valueGetter: (_, row) =>
      row.data?.debtStatus.totalPaymentAmount.toLocaleString()
  },
  {
    field: 'paymentDate',
    resizable: false,
    headerName: 'تاریخ پرداخت',
    width: 150,
    editable: true,
    filterable: false,
    renderCell: params => {
      const paymentDate = params.row?.data?.payments?.[0]?.data?.paymentDate

      return <FormattedDate date={paymentDate ? Number(paymentDate) : null} />
    }
  },
  {
    field: 'amount',
    resizable: false,
    headerName: 'مبلغ',
    width: 150,
    editable: true,
    filterable: false,

    valueGetter: (_, row) =>
      row.data?.payments?.[0]?.data?.amount.toLocaleString() ?? '0'
  },
  {
    field: 'paymentNumber',
    resizable: false,
    headerName: ' شماره کارت',
    width: 150,
    sortable: false,
    editable: true,
    valueGetter: (_, row) => row.data?.payments?.[0]?.data?.paymentNumber ?? ''
  },
  {
    field: 'totalPayedAmount',
    resizable: false,
    headerName: 'جمع پرداخت شده',
    width: 175,
    valueGetter: (_, row) =>
      row.data?.debtStatus.totalPayedAmount.toLocaleString() 
  },
  {
    field: 'totalDebt',
    resizable: false,
    headerName: ' باقیمانده حساب ',
    width: 160,
    valueGetter: (_, row) =>
      row.data?.debtStatus.totalDebt.toLocaleString() 
  }
]
