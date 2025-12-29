import { useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";

// Types
import type { TableDataGridProps } from "./types";

// Hooks
import { useTablePagination } from "./hooks/useTablePagination";
import { useTableFilter } from "./hooks/useTableFilter";
import { useTableDialogs } from "./hooks/useTableDialogs";
import { useTableColumns } from "./hooks/useTableColumns";

// Components
import EditDialog from "./components/EditDialog";
import DeleteDialog from "./components/DeleteDialog";
import {
  renderEditButton,
  renderDeleteButton,
  renderAddButton,
} from "./components/ActionButtons";

// Constants & Styles
import { getDataGridLocaleText } from "./constants";
import { getDataGridStyles, containerStyles, getSlotProps } from "./styles";

const TableDataGrid = (props: TableDataGridProps) => {
  // Destructure props
  const {
    data,
    isLoading,
    onPageChange,
    onSortChange,
    onFilterChange,
    disableUpdateRowButton = false,
    onUpdateRow,
    onUpdateForm,
    disableAddRowButton = true,
    onAddRow,
    addRowTitle = "افزودن",
    addRowColor = "warning",
    disableDeleteRowButton = false,
    onDeleteRowGetTitle,
    onDeleteRow,
    columns: baseColumns,
    disableActions = false,
  } = props;

  // State for cell editing
  const [editRows] = useState<{ [key: string]: boolean }>({});

  // Custom hooks
  const { paginationModel, setPaginationModel, sortModel, setSortModel } =
    useTablePagination({ onPageChange, onSortChange });

  const { filterModel, handleFilterChange } = useTableFilter({ onFilterChange });

  const {
    editRow,
    openEditDialog,
    handleEditClick,
    handleCloseEditDialog,
    selectedRecord,
    openDeleteDialog,
    handleDeleteClick,
    handleCloseDeleteDialog,
    confirmDelete,
  } = useTableDialogs({ onDeleteRowGetTitle, onDeleteRow });

  // Build columns with action buttons
  const columns = useTableColumns({
    columns: baseColumns,
    disableUpdateRowButton,
    disableDeleteRowButton,
    disableAddRowButton,
    disableActions,
    addRowTitle,
    addRowColor,
    onEditClick: handleEditClick,
    onDeleteClick: handleDeleteClick,
    onAddClick: onAddRow,
    renderEditButton,
    renderDeleteButton,
    renderAddButton,
  });

  // Calculate min width based on columns
  const calculatedMinWidth = useMemo(
    () => columns.reduce((sum, col) => sum + (col.width ?? 150), 0),
    [columns]
  );

  // Check if showing all data (no pagination)
  const isAllData = paginationModel.pageSize === -1;

  // Get pagination props conditionally
  const paginationProps = useMemo(() => {
    if (isAllData) return {};

    return {
      paginationMode: "server" as const,
      paginationModel,
      onPaginationModelChange: setPaginationModel,
      pageSizeOptions: [10, 20, 50],
      rowCount: data?.pagination.totalDocs ?? 0,
      initialState: {
        pagination: {
          paginationModel: {
            pageSize: data?.pagination.size ?? paginationModel.pageSize,
            page: data?.pagination.page ?? paginationModel.page,
          },
        },
      },
    };
  }, [isAllData, paginationModel, setPaginationModel, data?.pagination]);

  return (
    <Box sx={containerStyles}>
      <Box>
        <DataGrid
          loading={isLoading}
          rows={data?.docs || []}
          columns={columns}
          getRowId={(row) => row.id}
          rowSelection={false}
          sortingMode="server"
          sortModel={sortModel}
          onSortModelChange={setSortModel}
          filterMode="server"
          filterModel={filterModel}
          onFilterModelChange={handleFilterChange}
          checkboxSelection={false}
          {...paginationProps}
          hideFooter={isAllData}
          filterDebounceMs={1500}
          sx={getDataGridStyles(calculatedMinWidth)}
          isCellEditable={(params) => !!editRows[params.row.id]}
          localeText={getDataGridLocaleText(data)}
          slotProps={getSlotProps()}
          slots={{
            footer: isAllData ? () => null : undefined,
          }}
        />
      </Box>


      {/* Edit Dialog */}
      <EditDialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        editRow={editRow}
        onUpdateForm={onUpdateForm}
        onUpdateRow={onUpdateRow}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteDialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        selectedRecord={selectedRecord}
        onConfirm={confirmDelete}
      />
    </Box>
  );
};

export default TableDataGrid;
