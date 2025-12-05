// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useListSummaryEducationYear from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";
import AutocompleteSelect from "@schoolify/core/components/common/AutocompleteSelect";
import useMapToOptions from "@schoolify/core/hooks/common/useMapToOptions";
import Grid from "@schoolify/core/components/base/inputs/Grid";

import useListCostType from "../hooks/useListCostType";
import useUpdateCostType from "../hooks/useUpdateCostType";
import useDeleteCostType from "../hooks/useDeleteCostType";
import { listCostTypeColumns } from "../utilities/listCostTypeColumns";

// Feature Components

// Custom Hooks

// React Type

// Custom Types
// interface ListStudentProps {}

const ListCostType = () => {
  // Props
  // const {} = props;

  const [educationYearId, setEducationYearId] = useState("");
  const [costTypeId, setCostTypeId] = useState("");

  // Hooks
  const { schoolId = "" } = useParams();
  const { data: educationYearData } = useListSummaryEducationYear(schoolId);

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListCostType({
    educationYearId,
    pagination,
    filters,
  });

  const { mutateAsync: updateCostType } = useUpdateCostType();
  const { mutateAsync: deleteCostType } = useDeleteCostType();

  // Helpers
  const columns = listCostTypeColumns;

  // Handlers
  const handleUpdateCostType = async (id: string, updatedFields: any) => {
    await updateCostType({
      data: updatedFields,
      educationYearId: educationYearId,
      costTypeId: id,
    });
  };

  const handleDeleteCostType = async (id: string, row: any) => {
    await deleteCostType({
      costTypeId: id,
      educationYearId: educationYearId,
    });
  };

  // Render
  return (
    <ContentBox label="لیست عنوان های هزینه">
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <AutocompleteSelect
          label="سال تحصیلی"
          placeholder="لطفا یک سال را انتخاب نمایید"
          options={
            educationYearData?.map((item) => ({
              key: item.id,
              value: item.data?.title ?? "",
            })) ?? []
          }
          value={educationYearId}
          onChange={setEducationYearId}
          loading={isLoading}
        />
      </Grid>

      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleUpdateCostType}
        onDeleteRow={handleDeleteCostType}
        onDeleteRowGetTitle={(row) => `${row.data.title}`}
      />
    </ContentBox>
  );
};
export default ListCostType;
