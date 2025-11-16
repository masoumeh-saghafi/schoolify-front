import type { GridColDef } from "@mui/x-data-grid/models/colDef";
import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import type ListEducationYearEntity from "../types/api/ListEducationYearEntity";
import FormattedDate from "@schoolify/core/components/common/FormattedDate";

export const listEducationYearData: GridColDef<
  BaseIdDataEntity<ListEducationYearEntity>
>[] = [
  {
    field: "title",
    resizable: false,
    headerName: "سال تحصیلی",
    width: 150,
    editable: true,
    valueGetter: (_, row) => row.data?.title,
  },
  {
    field: "createDate",
    resizable: false,
    headerName: "ثبت  ",
    width: 150,
    editable: false,
    filterable: false,

    renderCell: (params) => (
      <FormattedDate date={params.row.data?.createDate} />
    ),
  },
  {
    field: "updateDate",
    resizable: false,
    headerName: " بروزرسانی",
    width: 150,
    editable: false,
    filterable: false,
    renderCell: (params) => (
      <FormattedDate date={params.row.data?.updateDate} />
    ),
  },
];
