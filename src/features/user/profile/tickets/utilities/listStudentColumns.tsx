import type { GridColDef } from "@mui/x-data-grid/models/colDef";

import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import FormattedDate from "@schoolify/core/components/common/FormattedDate";

import type ListTicketEntity from "@schoolify/features/user/profile/tickets/types/api/ListTicketEntity";
import { statusOptions, typeOptions } from "@schoolify/features/user/profile/tickets/validation/baseTypes";

export const listTicketColumns: GridColDef<
  BaseIdDataEntity<ListTicketEntity>
>[] = [
  {
    field: "title",
    resizable: false,
    headerName: "عنوان",
    width: 200,
    valueGetter: (_, row) => row.data?.title,
  },
  {
    field: "school",
    resizable: false,
    headerName: "نام مدرسه",
    width: 150,
    valueGetter: (_, row) => row.data?.school?.data?.title || "---",
  },
  {
    field: "status",
    resizable: false,
    headerName: "وضعیت",
    width: 160,
    valueGetter: (_, row) =>
      statusOptions.find((option) => option.id === row.data?.status)?.title ||
      "---",
  },

  {
    field: "type",
    resizable: false,
    headerName: "واحد",
    width: 150,
    valueGetter: (_, row) =>
      typeOptions.find((option) => option.id === row.data?.type)?.title ||
      "---",
  },
  {
    field: "createDate",
    resizable: false,
    headerName: "ثبت  ",
    width: 150,
    editable: false,
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
    renderCell: (params) => (
      <FormattedDate date={params.row.data?.updateDate} />
    ),
  },
];
