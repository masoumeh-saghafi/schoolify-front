// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import { useCallback, useState } from "react";
import { listStudentPaymentData } from "../utilities/listStudentPaymentData";
import { useParams } from "react-router-dom";
import useMapToOptions, {
  type OptionType,
} from "@schoolify/core/hooks/common/useMapToOptions";
import { addStudentPaymentData } from "../utilities/addStudentPaymentData";
import Grid from "@schoolify/core/components/base/inputs/Grid";
import AutocompleteSelect from "@schoolify/core/components/common/AutocompleteSelect";
import useListStudentPayment from "../hooks/useListStudentPayment";
import useDeleteStudentPayment from "../hooks/useDeleteStudentPayment";
import useUpdateStudentPayment from "../hooks/useUpdateStudentPayment";
import useListStudents from "@schoolify/features/user/school/management/shared/hooks/useListStudents";
import useListSummaryEducationYear from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";

// Feature Components

// Custom Hooks

// React Type

// Custom Types
// interface ListStudentProps {}

const ListStudentPayments = () => {
  // Props
  // const {} = props;
  const [educationYearId, setEducationYearId] = useState("");
  const [studentId, setStudentId] = useState("");

  // Hooks
  const { schoolId = "" } = useParams();

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListStudentPayment({
    studentId,
    pagination,
    filters,
  });
  const [studentSearchText, setStudentSearchText] = useState("");

  const { data: educationYearData } = useListSummaryEducationYear(schoolId);

  const { data: studentsData } = useListStudents({
    schoolId: schoolId,
    pagination: { size: -1 },
    filters: {
      educationYearId: educationYearId,
      identityCode: `%${studentSearchText}%`,
    },
    disabled: !educationYearId,
  });

  const studentsDataAny: any[] = studentsData?.docs ?? [];
  const studentOptions: OptionType[] = useMapToOptions(studentsDataAny);

  const { mutateAsync: updateStudentPayment } = useUpdateStudentPayment();
  const { mutateAsync: deleteStudentPayment } = useDeleteStudentPayment();

  const educationYearOptions = useMapToOptions(educationYearData);
  const handleStudentInput = useCallback((val: string) => {
    const newVal = val.split("-")[0].trim();
    if (studentSearchText === newVal) return;
    setStudentSearchText(newVal);
  }, []);

  const fieldStateMap = {
    educationYearId: {
      value: educationYearId,
      set: setEducationYearId,
      options: educationYearOptions,
      inputValue: undefined,
      onInputChange: undefined,
    },
    studentId: {
      value: studentId,
      set: setStudentId,
      options: studentOptions,
      inputValue: studentSearchText,
      onInputChange: handleStudentInput,
    },
  } as const;

  // Helpers
  const columns = listStudentPaymentData;

  // Handlers
  const handleUpdateStudentPayment = async (id: string, updatedFields: any) => {
    await updateStudentPayment({
      data: updatedFields,
      studentPaymentId: id,
      studentId: studentId,
    });
  };

  const handleDeleteStudentPayment = async (id: string, row: any) => {
    await deleteStudentPayment({
      studentPaymentsId: id,
      studentId: studentId,
    });
  };

  // Render
  return (
    <ContentBox label="لیست پرداخت ها ">
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {addStudentPaymentData.map((field) => {
          const { value, set, options, inputValue, onInputChange } =
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
              inputValue={inputValue}
              onInputChange={onInputChange}
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
        onUpdateRow={handleUpdateStudentPayment}
        onDeleteRow={handleDeleteStudentPayment}
        onDeleteRowGetTitle={(row) => `${row.data.amount}`}
      />
    </ContentBox>
  );
};
export default ListStudentPayments;
