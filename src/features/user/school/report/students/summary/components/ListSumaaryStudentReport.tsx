// React Type
import { useState } from "react";
import { useParams } from "react-router-dom";

// MUI Components
import Grid from "@schoolify/core/components/base/inputs/Grid";
import AutocompleteSelect from "@schoolify/core/components/common/AutocompleteSelect";

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";

// Custom Hooks
import useListSummaryEducationYears from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";
import useListSummaryEducationLevel from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationLevel";
import useListSummaryEducationGrade from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationGrade";
import useListSummaryClass from "@schoolify/features/user/school/management/shared/hooks/useListSummaryClass";
import useMapToOptions from "@schoolify/core/hooks/common/useMapToOptions";

// Custom Utilities
import { listSummaryStudentReportColumns } from "@schoolify/features/user/school/report/students/summary/utilities/listStudentColumns";
import { listSummaryStudentReportData } from "@schoolify/features/user/school/report/students/summary/utilities/listStudentReportData";
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";
import useListSummaryStudentReport from "@schoolify/features/user/school/report/students/summary/hooks/useListSummaryStudentReport";
import { ExportStudentListSummaryToExcel } from "@schoolify/features/user/school/report/students/summary/components/ExportStudentListSummaryToExcel";

// Custom Types
// interface ListStudentReportProps {}

const ListSumaaryStudentReport = () => {
  // Props
  // const {} = props;

  // States
  const [educationYearId, setEducationYearId] = useState("");
  const [educationLevelId, setEducationLevelId] = useState("");
  const [educationGradeId, setEducationGradeId] = useState("");
  const [classId, setClassId] = useState("");


  // Hooks
  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListSummaryStudentReport({
    educationYearId,
    pagination,
    filters:
           {
      
        educationLevelId: educationLevelId,
        educationGradeId: educationGradeId,
        classRoomId: classId,
      },
  });

  const { schoolId = "" } = useParams();
  const { data: educationYearData } = useListSummaryEducationYears(schoolId);

  const { data: educationLevelData } =
    useListSummaryEducationLevel(educationYearId);

  const { data: educationGradeData } =
    useListSummaryEducationGrade(educationLevelId);

  const { data: classData } = useListSummaryClass(educationGradeId);
  

  const educationYearOptions = useMapToOptions(educationYearData);
  const educationLevelOptions = useMapToOptions(educationLevelData);
  const educationGradeOptions = useMapToOptions(educationGradeData);
  const classOptions = useMapToOptions(classData);

  // Helpers
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

  const columns = listSummaryStudentReportColumns;

  // Handlers

  const handleExportToExcel = () => {
    ExportStudentListSummaryToExcel({ data });
  };

  // Render
  return (
   <ContentBox label=" گزارش خلاصه دانش آموزان">
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {listSummaryStudentReportData.map((field) => {
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
        disableUpdateRowButton={true}
        disableDeleteRowButton={true}
        disableAddRowButton={true}
        
      />
      <Box display="flex" justifyContent="flex-start" mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleExportToExcel}
        >
          چاپ گزارش
        </Button>
      </Box>
    </ContentBox>
  );
};
export default ListSumaaryStudentReport;
