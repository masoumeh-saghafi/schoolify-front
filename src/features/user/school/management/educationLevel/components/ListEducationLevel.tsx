// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";

// Feature Components

// Custom Hooks

// React Type
import useListEducationLevel from "../hooks/useListEducationLevel";
import useDeleteEducationLevel from "../hooks/useDeleteEducationLevel";
import useUpdateEducationLevel from "../hooks/useUpdateEducationLevel";
import { useState } from "react";
import { listEducationLevelData } from "../utilities/listEducationLevelData";
import ControlledAutocomplete from "@schoolify/core/components/common/ControlledAutocomplete";
import Autocomplete from "@schoolify/core/components/base/inputs/Autocomplete";
import TextField from "@schoolify/core/components/base/inputs/TextField";
import useListSummaryEducationYear from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears";
import { useParams } from "react-router-dom";

// Custom Types
// interface ListStudentProps {}

const ListEducationLevel = () => {
  // Props
  // const {} = props;
  const [educationYearId, setEducationYearId] = useState("");

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

  const { data, isLoading } = useListEducationLevel({
    educationYearId,
    pagination,
    filters,
  });

  const { mutateAsync: updateEducationLevel } = useUpdateEducationLevel();
  const { mutateAsync: deleteEducationLevel } = useDeleteEducationLevel();

  // Helpers
  const columns = listEducationLevelData;

  // Handlers
  const handleUpdateEducationLevel = async (id: string, updatedFields: any) => {
    await updateEducationLevel({
      data: updatedFields,
      educationLevelId: id,
      educationYearId: educationYearId,
    });
  };

  const handleDeleteEducationLevel = async (id: string, row: any) => {
    await deleteEducationLevel({
      educationLevelId: id,
      educationYearId: educationYearId,
    });
  };

  // Render
  return (
    <ContentBox label="لیست مقطع های تحصیلی ">
      <Autocomplete
        size="small"
        options={educationYearData ?? []}
        getOptionLabel={(option) => option.data?.title ?? ""}
        loading={isLoading}
        onChange={(_, value) => setEducationYearId(value?.id ?? "")}
        renderInput={(params) => (
          <TextField
            {...params}
            label="سال تحصیلی "
            placeholder=" لطفا یک سال را انتخاب نمایید"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        )}
        slotProps={{
          listbox: {
            sx: {
              fontSize: "0.75rem",
            },
          },
        }}
      />

      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleUpdateEducationLevel}
        onDeleteRow={handleDeleteEducationLevel}
        onDeleteRowGetTitle={(row) =>
          `${row.data.firstName} ${row.data.lastName}`
        }
      />
    </ContentBox>
  );
};
export default ListEducationLevel;
