import { useState, useEffect } from "react";
import type { GridPaginationModel, GridSortModel } from "@mui/x-data-grid";

interface UseTablePaginationProps {
  onPageChange: (paginationModel: GridPaginationModel) => void;
  onSortChange: (order: string) => void;
}

export const useTablePagination = ({
  onPageChange,
  onSortChange,
}: UseTablePaginationProps) => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  // Handle pagination changes
  useEffect(() => {
    onPageChange(paginationModel);
  }, [paginationModel, onPageChange]);

  // Handle sort changes
  useEffect(() => {
    let newOrder = "";
    if (sortModel.length > 0) {
      newOrder = sortModel[0].field;
      if (sortModel[0].sort === "desc") {
        newOrder = `-${newOrder}`;
      }
    }
    onSortChange(newOrder);
  }, [sortModel, onSortChange]);

  return {
    paginationModel,
    setPaginationModel,
    sortModel,
    setSortModel,
  };
};
