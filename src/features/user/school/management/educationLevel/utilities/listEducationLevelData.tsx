import type { GridColDef } from "@mui/x-data-grid/models/colDef";
import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import FormattedDate from "@schoolify/core/components/common/FormattedDate";
import type ListEducationLevelEntity from "../types/api/ListEducationLevelEntity";
export const listEducationLevelData: GridColDef<
  BaseIdDataEntity<ListEducationLevelEntity>
>[] = [
  {
    field: "title",
    resizable: false,
    headerName: "مقطع تحصیلی",
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
    headerName: "  بروزرسانی",
    width: 150,
    editable: false,
    filterable: false,
    renderCell: (params) => (
      <FormattedDate date={params.row.data?.updateDate} />
    ),
  },
];
