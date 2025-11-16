// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import { useState } from "react";
import useListEducationGrade from "../hooks/useListEducationGrade";
import useUpdateEducationGrade from "../hooks/useUpdateEducationGrade";
import useDeleteEducationGrade from "../hooks/useDeleteEducationGrade";
import { listEducationGradeData } from "../utilities/listEducationLGradeData";
import useListSummaryEducationYears from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears";
import useListSummaryEducationLevel from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationLevel";
import { useParams } from "react-router-dom";
import useListSummaryEducationYear from "@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears";
import Autocomplete from "@schoolify/core/components/base/inputs/Autocomplete";
import TextField from "@schoolify/core/components/base/inputs/TextField";

// Feature Components

// Custom Hooks

// React Type

// Custom Types
// interface ListStudentProps {}

const ListEducationGrade = () => {
  // Props
  // const {} = props;
  const [educationYearId, setEducationYearId] = useState("");
  const [educationLevelId, setEducationLevelId] = useState("");

  // Hooks
  const { schoolId = "" } = useParams();
  const { data: educationYearData } = useListSummaryEducationYear(schoolId);
  const { data: educationLevelData } =
    useListSummaryEducationLevel(educationYearId);

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListEducationGrade({
    educationLevelId,
    pagination,
    filters,
  });

  const { mutateAsync: updateEducationGrade } = useUpdateEducationGrade();
  const { mutateAsync: deleteEducationGrade } = useDeleteEducationGrade();

  // Helpers
  const columns = listEducationGradeData;

  // Handlers
  const handleUpdateEducationGrade = async (id: string, updatedFields: any) => {
    await updateEducationGrade({
      data: updatedFields,
      educationGradeId: id,
      educationLevelId: educationLevelId,
    });
  };

  const handleDeleteEducationGrade = async (id: string, row: any) => {
    await deleteEducationGrade({
      educationGradeId: id,
      educationLevelId: educationLevelId,
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

      <Autocomplete
        size="small"
        options={educationLevelData ?? []}
        getOptionLabel={(option) => option.data?.title ?? ""}
        loading={isLoading}
        onChange={(_, value) => setEducationLevelId(value?.id ?? "")}
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
        onUpdateRow={handleUpdateEducationGrade}
        onDeleteRow={handleDeleteEducationGrade}
        onDeleteRowGetTitle={(row) =>
          `${row.data.firstName} ${row.data.lastName}`
        }
      />
    </ContentBox>
  );
};
export default ListEducationGrade;
