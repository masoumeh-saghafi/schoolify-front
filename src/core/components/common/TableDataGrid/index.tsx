import type { TransitionProps } from "@mui/material/transitions";
import React, { useEffect, useState } from "react";
import Slide from "@schoolify/core/components/base/inputs/Slide";
import Button from "../../base/inputs/Button";
import { EditIcon } from "../../icon/EditIcon";
import { DeleteIcon } from "../../icon/DeleteIcon";
import Box from "../../base/inputs/Box";
import Dialog from "../../base/inputs/Dialog";
import DialogTitle from "../../base/inputs/DialogTitle";
import DialogContent from "../../base/inputs/DialogContent";
import Typography from "../../base/inputs/Typography";
import DialogActions from "../../base/inputs/DialogActions";
import { theme } from "@schoolify/core/style/themes/muiTheme";
import {
  type GridColDef,
  type GridPaginationModel,
  type GridSortModel,
  type GridFilterModel,
  DataGrid,
  getGridStringOperators,
} from "@mui/x-data-grid";

const allowedOperatorTypes = ["equals", "contains", "startsWith", "endsWith"];
const customStringOperators = getGridStringOperators().filter((op) =>
  allowedOperatorTypes.includes(op.value)
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface TableDataGridProps {
  data: any;
  isLoading: boolean;
  //   onPageChange: (page: number, pageSize: number) => void
  onPageChange: (paginationModel: GridPaginationModel) => void;
  onSortChange: (order: string) => void;
  onFilterChange: (filter: Record<string, string>) => void;
  disableUpdateRowButton?: boolean;
  onUpdateRow?: (id: string, updatedFields: any, row: any) => Promise<void>;
  disableDeleteRowButton?: boolean;
  onDeleteRowGetTitle?: (row: any) => string;
  onDeleteRow?: (id: string, row: any) => Promise<void>;

  columns: GridColDef[];

  disableAddRowButton?: boolean;
  addRowTitle?: string;
  onAddRow?: (id: string, row: any) => void;
  addRowColor?:
    | "error"
    | "success"
    | "primary"
    | "secondary"
    | "info"
    | "warning";

  disableActions?: boolean;
}

const TableDataGrid = (params: TableDataGridProps) => {
  const {
    data,
    isLoading,
    onPageChange,
    onSortChange,
    onFilterChange,
    disableUpdateRowButton = false,
    onUpdateRow,
    disableAddRowButton = true,
    onAddRow,
    addRowTitle = "افزودن",
    addRowColor = "warning",
    disableDeleteRowButton = false,
    onDeleteRowGetTitle,
    onDeleteRow,
    columns,
    disableActions = false,
  } = params;
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });
  const [editRows, setEditRows] = useState<{ [key: string]: boolean }>({});
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>();
  const [selectedRecord, setSelectedRecord] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    //  onPageChange(paginationModel.page + 1, paginationModel.pageSize)
    onPageChange(paginationModel);
  }, [paginationModel]);

  useEffect(() => {
    let newOrder = "";
    if (sortModel.length > 0) {
      newOrder = sortModel[0].field;
      if (sortModel[0].sort === "desc") {
        newOrder = `-${newOrder}`;
      }
    }
    onSortChange(newOrder);
  }, [sortModel]);

  const handleFilterChange = (filterModel: any) => {
    const filterParams: Record<string, string> = {};
    filterModel.items.forEach((filter: any) => {
      if (filter.value) {
        let filterValue = filter.value;
        switch (filter.operator) {
          case "contains":
            filterValue = `%${filterValue}%`;
            break;
          case "startsWith":
            filterValue = `${filterValue}%`;
            break;
          case "endsWith":
            filterValue = `%${filterValue}`;
            break;
          case "equals":
            filterValue = filterValue;
            break;
          default:
            filterValue = filterValue;
            break;
        }
        filterParams[filter.field] = filterValue;
      }
    });

    onFilterChange(filterParams);
  };

  const handleUpdateRow = (row: any) => {
    const updatedFields = { ...row };

    delete updatedFields.id;
    delete updatedFields.data;

    onUpdateRow?.(row.id, updatedFields, row).then((_) => {
      setEditRows((prev) => ({ ...prev, [row.id]: false }));
    });
  };

  const handleDeleteClick = (row: any) => {
    const title = onDeleteRowGetTitle?.(row) ?? "";
    setSelectedRecord({ id: row.id, title: title });

    setOpenDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (selectedRecord) {
      onDeleteRow?.(selectedRecord.id, selectedRecord);
      setOpenDeleteDialog(false);
    }
  };

  if (!disableUpdateRowButton) {
    columns.push({
      field: "actions",
      headerName: "ویرایش",
      width: 100,
      sortable: false,
      filterable: false,
      editable: false,
      resizable: false,

      renderCell: (params: any) => {
        const isEditing = editRows[params.row.id];

        return isEditing ? (
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.palette.warning.light }}
            size="small"
            onClick={() => handleUpdateRow(params.row)}
            disabled={disableActions}
          >
            اتمام
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.palette.warning.main }}
            size="small"
            onClick={() =>
              setEditRows((prev) => ({ ...prev, [params.row.id]: true }))
            }
            disabled={disableActions}
          >
            <EditIcon fontSize="small" />
          </Button>
        );
      },
    });
  }

  if (!disableDeleteRowButton) {
    columns.push({
      field: "delete",
      headerName: "حذف",
      width: 100,
      sortable: false,
      filterable: false,
      editable: false,
      resizable: false,

      renderCell: (params: any) => (
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleDeleteClick(params.row)}
          disabled={disableActions}
        >
          <DeleteIcon fontSize="small" />
        </Button>
      ),
    });
  }

  if (!disableAddRowButton) {
    columns.push({
      field: "add",
      headerName: addRowTitle,
      width: 150,
      sortable: false,
      filterable: false,
      editable: false,
      resizable: false,
      renderCell: (params: any) => (
        <Button
          variant="contained"
          color={addRowColor}
          size="small"
          onClick={() => onAddRow?.(params.row.id, params.row)}
          disabled={disableActions}
        >
          {addRowTitle}
        </Button>
      ),
    });
  }

  const newColumns = columns.map((col) => {
    if (col.type === "string" || !col.type) {
      return {
        ...col,
        filterOperators: customStringOperators,
      };
    }
    return col;
  });

  const isAllData = paginationModel.pageSize === -1;

  return (
    <Box sx={{ overflowX: "auto" }}>
      <Box sx={{ width: "auto" }}>
        <DataGrid
          loading={isLoading}
          rows={data?.docs || []}
          columns={newColumns}
          getRowId={(row: any) => row.id}
          rowSelection={false}
          // paginationMode='server'
          // paginationModel={paginationModel}
          // onPaginationModelChange={setPaginationModel}
          sortingMode="server"
          sortModel={sortModel}
          onSortModelChange={setSortModel}
          filterMode="server"
          filterModel={filterModel}
          onFilterModelChange={handleFilterChange}
          checkboxSelection={false}
          // pageSizeOptions={[10, 20, 50]}
          // rowCount={data?.pagination.totalDocs}
          {...(!isAllData && {
            paginationMode: "server",
            paginationModel,
            onPaginationModelChange: setPaginationModel,
            pageSizeOptions: [10, 20, 50],
            rowCount: data?.pagination.totalDocs,
            initialState: {
              pagination: {
                paginationModel: {
                  pageSize: data?.pagination.size ?? paginationModel.pageSize,
                  page: data?.pagination.page ?? paginationModel.page,
                },
              },
            },
          })}
          hideFooter={isAllData}
          // initialState={{
          //   pagination: {
          //     paginationModel: {
          //       pageSize: data?.pagination.size ?? paginationModel.pageSize,
          //       page: data?.pagination.page ?? paginationModel.page
          //     }
          //   }
          // }}
          filterDebounceMs={1500}
          sx={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.black,

            "& .MuiDataGrid-columnHeaderTitle": {
              color: theme.palette.text.header,
            },
          }}
          isCellEditable={(params: any) => !!editRows[params.row.id]}
          localeText={{
            columnMenuSortAsc: "مرتب‌سازی صعودی",
            columnMenuSortDesc: "مرتب‌سازی نزولی",
            columnMenuFilter: "فیلتر",
            columnMenuHideColumn: "مخفی کردن ستون",
            columnMenuManageColumns: "مدیریت ستون‌ها",
            columnMenuUnsort: "حذف مرتب‌سازی",
            filterPanelColumns: "ستون",
            filterPanelOperator: "نوع فیلتر",
            filterPanelInputLabel: "مقدار فیلتر",
            filterPanelInputPlaceholder: "مقدار فیلتر را وارد کنید",
            filterOperatorContains: "شامل شود",
            filterOperatorEquals: "برابر باشد",
            filterOperatorStartsWith: "شروع شود با",
            filterOperatorEndsWith: "تمام شود با",
            columnMenuLabel: "منو",
            columnHeaderSortIconLabel: "مرتب‌سازی",
            columnHeaderFiltersTooltipActive: (count: any) =>
              `${count} فیلتر فعال`,
            toolbarFiltersTooltipActive: (count: any) => `${count} فیلتر فعال`,
            noRowsLabel: "اطلاعاتی یافت نشد",
            columnsManagementShowHideAllText: "نمایش همه",
            columnsManagementReset: "حالت پیشفرض",
            columnsManagementSearchTitle: "جستجو",
            paginationRowsPerPage: "تعداد رکورد در صفحه",
            paginationDisplayedRows: (page: any) =>
              // `رکورد ${page.from} تا ${page.to} از ${page.count}`,
              {
                if (data?.pagination.page == undefined)
                  return "در حال دریافت اطلاعات...";
                else
                  return `صفحه ${data?.pagination.page + 1} از ${
                    data?.pagination.totalPages
                  }`;
              },
          }}
        />
      </Box>
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        slots={{ transition: Transition }}
      >
        <DialogTitle fontSize="1.1rem">حذف رکورد</DialogTitle>
        <DialogContent>
          <Typography sx={{ color: theme.palette.text.black }}>
            {selectedRecord ? (
              <>
                آیا از حذف رکورد <b>{selectedRecord.title}</b> مطمئن هستید؟{" "}
              </>
            ) : (
              "در حال بارگذاری اطلاعات..."
            )}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="secondary">
            انصراف
          </Button>
          {selectedRecord && (
            <Button onClick={confirmDelete} color="error">
              تأیید
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default TableDataGrid;
