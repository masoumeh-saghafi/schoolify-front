import type { GridColDef } from "@mui/x-data-grid/models/colDef";
import FormattedDate from "@schoolify/core/components/common/FormattedDate";

import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";

import type ListStudentsEntity from "@schoolify/features/user/school/management/student/types/api/ListStudentsEntity";

import { identityTypeOptions } from "@schoolify/features/user/school/management/student/validation/baseTypes";
import type ListStudentReportEntity from "../types/api/ListStudentReportEntity";

export const listStudentReportColumns: GridColDef<
  BaseIdDataEntity<ListStudentReportEntity>
>[] = [
  {
    field: "firstName",
    resizable: false,
    headerName: "نام",
    width: 150,
    editable: true,
    sortable: true,
    valueGetter: (_, row) => row.data?.firstName,
  },
  {
    field: "lastName",
    resizable: false,
    headerName: "نام خانوادگی",
    width: 150,
    editable: true,
    sortable: true,
    valueGetter: (_, row) => row.data?.lastName,
  },
  {
    field: "fatherName",
    resizable: false,
    headerName: "نام پدر",
    width: 150,
    sortable: false,
    editable: true,
    valueGetter: (_, row) => row.data?.fatherName,
  },
 
  {
    field: "identityCode",
    resizable: false,
    headerName: "شناسه هویتی",
    width: 150,
    sortable: false,
    editable: true,
    valueGetter: (_, row) => row.data?.identityCode,
  },
  {
    field: "identityType",
    resizable: false,
    headerName: "هویت",
    width: 100,
    sortable: false,
    valueGetter: (_, row) =>
      identityTypeOptions.find(
        (option) => option.key === row.data?.identityType
      )?.value,
  },
  {
      field: 'classTitle',
      resizable: false,
      headerName: 'کلاس',
      width: 150,
      valueGetter: (_, row) => row.data?.class.data?.title
    },
    {
      field: 'totalPaymentAmount',
      resizable: false,
      headerName: 'مبلغ کل',
      width: 150,
      valueGetter: (_, row) =>
        row.data?.debtStatus.totalPaymentAmount.toLocaleString()
    },
    {
      field: 'totalPayedAmount',
      resizable: false,
      headerName: 'مبلغ پرداخت شده',
      width: 175,
      valueGetter: (_, row) =>
        row.data?.debtStatus.totalPayedAmount.toLocaleString()
    },
    {
      field: 'totalDebt',
      resizable: false,
      headerName: 'مبلغ باقیمانده',
      width: 160,
      valueGetter: (_, row) => row.data?.debtStatus.totalDebt.toLocaleString()
    }
];
