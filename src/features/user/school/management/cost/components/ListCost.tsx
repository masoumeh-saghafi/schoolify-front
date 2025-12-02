// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useListSummaryEducationYear from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears";
import AutocompleteSelect from "@schoolify/core/components/common/AutocompleteSelect";
import useMapToOptions from "@schoolify/core/hooks/common/useMapToOptions";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import useListCost from "../hooks/useListCost";
import useUpdateCost from "../hooks/useUpdateCost";
import useDeleteCost from "../hooks/useDeleteCost";
import { listCostColumns } from "../utilities/listCostColumns";

// Feature Components

// Custom Hooks

// React Type

// Custom Types
// interface ListStudentProps {}

const ListCost = () => {
  // Props
  // const {} = props;

  const [educationYearId, setEducationYearId] = useState("");
  // const [costId, setCostId] = useState('')

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

  const { data, isLoading } = useListCost({
    educationYearId,
    pagination,
    filters,
  });

  const { mutateAsync: updateCost } = useUpdateCost();
  const { mutateAsync: deleteCost } = useDeleteCost();

  // Helpers
  const columns = listCostColumns;

  // Handlers
  const handleUpdateCost = async (id: string, updatedFields: any) => {
    await updateCost({
      data: updatedFields,
      educationYearId: educationYearId,
      costId: id,
    });
  };

  const handleDeleteCost = async (id: string, row: any) => {
    await deleteCost({
      costId: id,
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
        onUpdateRow={handleUpdateCost}
        onDeleteRow={handleDeleteCost}
        onDeleteRowGetTitle={(row) =>
          `${row.data.costType.data.title} - ${row.data.referenceTitle}`
        }
      />
    </ContentBox>
  );
};
export default ListCost;
