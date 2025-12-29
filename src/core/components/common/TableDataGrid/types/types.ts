import type { GridColDef, GridPaginationModel } from "@mui/x-data-grid";

export interface TableDataGridProps {
  data: any;
  isLoading: boolean;
  onPageChange: (paginationModel: GridPaginationModel) => void;
  onSortChange: (order: string) => void;
  onFilterChange: (filter: Record<string, string>) => void;
  disableUpdateRowButton?: boolean;
  onUpdateRow?: (id: string, updatedFields: any, row: any) => Promise<void>;
  onUpdateForm?: React.ComponentType<{
    recordId: string;
    defaultValues: any;
    onSubmit?: (id: string, data: any, row?: any) => void;
  }>;
  onDeleteRowGetTitle?: (row: any) => string;
  disableDeleteRowButton?: boolean;
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

export interface SelectedRecord {
  id: string;
  title: string;
}
