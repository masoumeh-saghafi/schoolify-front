import { useMemo } from "react";
import type { GridColDef } from "@mui/x-data-grid";
import { customStringOperators } from "../constants";

interface UseTableColumnsProps {
  columns: GridColDef[];
  disableUpdateRowButton: boolean;
  disableDeleteRowButton: boolean;
  disableAddRowButton: boolean;
  disableActions: boolean;
  addRowTitle: string;
  addRowColor: "error" | "success" | "primary" | "secondary" | "info" | "warning";
  onEditClick: (row: any) => void;
  onDeleteClick: (row: any) => void;
  onAddClick?: (id: string, row: any) => void;
  renderEditButton: (row: any, disabled: boolean, onClick: () => void) => React.ReactNode;
  renderDeleteButton: (row: any, disabled: boolean, onClick: () => void) => React.ReactNode;
  renderAddButton: (row: any, disabled: boolean, onClick: () => void, title: string, color: string) => React.ReactNode;
}

export const useTableColumns = ({
  columns,
  disableUpdateRowButton,
  disableDeleteRowButton,
  disableAddRowButton,
  disableActions,
  addRowTitle,
  addRowColor,
  onEditClick,
  onDeleteClick,
  onAddClick,
  renderEditButton,
  renderDeleteButton,
  renderAddButton,
}: UseTableColumnsProps): GridColDef[] => {
  return useMemo(() => {
    let modifiedColumns = [...columns];

    // Add edit column
    if (!disableUpdateRowButton) {
      modifiedColumns = [
        ...modifiedColumns,
        {
          field: "actions",
          headerName: "ویرایش",
          width: 100,
          sortable: false,
          filterable: false,
          editable: false,
          resizable: false,
          renderCell: (params) =>
            renderEditButton(params.row, disableActions, () =>
              onEditClick(params.row)
            ),
        },
      ];
    }

    // Add delete column
    if (!disableDeleteRowButton) {
      modifiedColumns = [
        ...modifiedColumns,
        {
          field: "delete",
          headerName: "حذف",
          width: 100,
          sortable: false,
          filterable: false,
          editable: false,
          resizable: false,
          renderCell: (params) =>
            renderDeleteButton(params.row, disableActions, () =>
              onDeleteClick(params.row)
            ),
        },
      ];
    }

    // Add custom action column
    if (!disableAddRowButton && onAddClick) {
      modifiedColumns = [
        ...modifiedColumns,
        {
          field: "add",
          headerName: addRowTitle,
          width: 150,
          sortable: false,
          filterable: false,
          editable: false,
          resizable: false,
          renderCell: (params) =>
            renderAddButton(
              params.row,
              disableActions,
              () => onAddClick(params.row.id, params.row),
              addRowTitle,
              addRowColor
            ),
        },
      ];
    }

    // Apply custom string operators to string columns
    return modifiedColumns.map((col) => {
      if (col.type === "string" || !col.type) {
        return {
          ...col,
          filterOperators: customStringOperators,
        };
      }
      return col;
    });
  }, [
    columns,
    disableUpdateRowButton,
    disableDeleteRowButton,
    disableAddRowButton,
    disableActions,
    addRowTitle,
    addRowColor,
    onEditClick,
    onDeleteClick,
    onAddClick,
    renderEditButton,
    renderDeleteButton,
    renderAddButton,
  ]);
};
