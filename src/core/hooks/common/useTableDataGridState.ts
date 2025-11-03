import { useState } from "react";
import { type GridPaginationModel } from "@mui/x-data-grid";
import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";

const useTableDataGridState = () => {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [order, setOrder] = useState<string>("");
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });

  const handleFilterChange = (filter: Record<string, string>) => {
    setFilters(filter);
  };

  const handlePaginationModelChange = (
    newPaginationModel: GridPaginationModel
  ) => {
    setPaginationModel(newPaginationModel);
  };

  const handleSortModelChange = (newOrder: string) => {
    setOrder(newOrder);
  };

  const paginationData: BaseRequestPaginationParams = {
    page: paginationModel.page,
    size: paginationModel.pageSize,
    order: order,
  };

  return {
    filters,
    order,
    paginationModel,

    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
    paginationData,
  };
};

export default useTableDataGridState;
