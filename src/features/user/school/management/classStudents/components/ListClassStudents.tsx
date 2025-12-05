// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import { useState } from "react";
import useListSummaryEducationYears from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";
import useListSummaryEducationLevel from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationLevel";
import { useParams } from "react-router-dom";
import useListSummaryEducationGrade from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationGrade";
import useDeleteClass from "../hooks/useDeleteClassStudent";
import useListClass from "../../class/hooks/useListClass";
import useListSummaryClass from "@schoolify/features/user/school/management/shared/hooks/useListSummaryClass";
import useMapToOptions from "@schoolify/core/hooks/common/useMapToOptions";
import { listStudentData } from "../../student/utilities/listStudentData";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import AutocompleteSelect from "@schoolify/core/components/common/AutocompleteSelect";
import { listClassStudentData } from "../utilities/listClassStudentData";
import useListStudents from "@schoolify/features/user/school/management/shared/hooks/useListStudents";

// Feature Components

// Custom Hooks

// React Type

// Custom Types
// interface ListStudentProps {}

const ListClassStudents = () => {
  // Props
  // const {} = props;
  const [educationYearId, setEducationYearId] = useState("");
  const [educationLevelId, setEducationLevelId] = useState("");
  const [educationGradeId, setEducationGradeId] = useState("");
  const [classId, setClassId] = useState("");

  // Hooks
  const { schoolId = "" } = useParams();

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListClass({
    educationGradeId,
    pagination,
    filters,
  });

  const { data: educationYearData } = useListSummaryEducationYears(schoolId);

  const { data: educationLevelData } =
    useListSummaryEducationLevel(educationYearId);

  const { data: educationGradeData } =
    useListSummaryEducationGrade(educationLevelId);

  const { data: classData } = useListSummaryClass(educationGradeId);
  const { data: studentsData } = useListStudents({
    schoolId: schoolId,
    pagination: pagination,
    filters: {
      classRoomId: classId,
    },
    disabled: !classId,
  });

  // const { mutateAsync: updateClass } = useUpdateClass();
  const { mutateAsync: deleteClass } = useDeleteClass();

  const educationYearOptions = useMapToOptions(educationYearData);
  const educationLevelOptions = useMapToOptions(educationLevelData);
  const educationGradeOptions = useMapToOptions(educationGradeData);
  const classOptions = useMapToOptions(classData);

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
    educationGradeId: {
      value: educationGradeId,
      set: setEducationGradeId,
      options: educationGradeOptions,
    },
    classId: {
      value: classId,
      set: setClassId,
      options: classOptions,
    },
  } as const;

  // Helpers
  const columns = listStudentData;

  // Handlers

  const handleDeleteClass = async (id: string, row: any) => {
    await deleteClass({
      classId: classId,
      studentId: id,
      schoolId: schoolId,
    });
  };

  // Render
  return (
    <ContentBox label="لیست دانش آموزان کلاس  ">
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {listClassStudentData.map((field) => {
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
        data={studentsData}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        // onUpdateRow={handleUpdateClass}
        disableUpdateRowButton={true}
        onDeleteRow={handleDeleteClass}
        onDeleteRowGetTitle={(row) =>
          `${row.data.firstName} ${row.data.lastName}`
        }
      />
    </ContentBox>
  );
};
export default ListClassStudents;
