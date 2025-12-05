// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import { useState } from "react";
import useListEducationGrade from "../hooks/useListEducationGrade";
import useUpdateEducationGrade from "../hooks/useUpdateEducationGrade";
import useDeleteEducationGrade from "../hooks/useDeleteEducationGrade";
import { listEducationGradeData } from "../utilities/listEducationLGradeData";
import useListSummaryEducationLevel from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationLevel";
import { useParams } from "react-router-dom";
import useListSummaryEducationYear from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";
import AutocompleteSelect from "@schoolify/core/components/common/AutocompleteSelect";
import useMapToOptions from "@schoolify/core/hooks/common/useMapToOptions";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import { addEducationLGradeData } from "../utilities/addEducationLGradeData";

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

  const educationYearOptions = useMapToOptions(educationYearData);
  const educationLevelOptions = useMapToOptions(educationLevelData);

  const fieldStateMap = {
    educationYearId: {
      value: educationYearId,
      set: setEducationYearId,
      options: educationYearOptions,
    },
    educationLevelId: {
      value: educationLevelId,
      set: setEducationLevelId,
      options: educationLevelOptions,
    },
  } as const;

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
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {addEducationLGradeData.map((field) => {
          const { value, set, options } =
            fieldStateMap[field.name as keyof typeof fieldStateMap];
          return (
            <AutocompleteSelect
              key={field.name}
              label={field.label}
              placeholder={`لطفا ${field.label.toLowerCase()} را انتخاب نمایید`}
              value={value}
              onChange={set}
              options={options}
              loading={isLoading}
            />
          );
        })}
      </Grid>

      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleUpdateEducationGrade}
        onDeleteRow={handleDeleteEducationGrade}
        onDeleteRowGetTitle={(row) => `${row.data.title}`}
      />
    </ContentBox>
  );
};
export default ListEducationGrade;
