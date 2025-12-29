import { useState } from "react";
import type { GridFilterModel } from "@mui/x-data-grid";

interface UseTableFilterProps {
  onFilterChange: (filter: Record<string, string>) => void;
}

export const useTableFilter = ({ onFilterChange }: UseTableFilterProps) => {
  const [filterModel, setFilterModel] = useState<GridFilterModel>();

  const handleFilterChange = (model: GridFilterModel) => {
    const filterParams: Record<string, string> = {};

    model.items.forEach((filter) => {
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
          default:
            break;
        }

        filterParams[filter.field] = filterValue;
      }
    });

    onFilterChange(filterParams);
  };

  return {
    filterModel,
    setFilterModel,
    handleFilterChange,
  };
};
