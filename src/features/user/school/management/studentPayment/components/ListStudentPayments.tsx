// React Type
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

// MUI Components
import Grid from "@schoolify/core/components/base/inputs/Grid";

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import AutocompleteSelect from "@schoolify/core/components/common/AutocompleteSelect";
import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";

// Custom Hooks
import useMapToOptions, {
  type OptionType,
} from "@schoolify/core/hooks/common/useMapToOptions";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import useListStudentPayment from "@schoolify/features/user/school/management/studentPayment/hooks/useListStudentPayment";
import useDeleteStudentPayment from "@schoolify/features/user/school/management/studentPayment/hooks/useDeleteStudentPayment";
import useUpdateStudentPayment from "@schoolify/features/user/school/management/studentPayment/hooks/useUpdateStudentPayment";
import useListStudents from "@schoolify/features/user/school/management/shared/hooks/useListStudents";
import useListSummaryEducationYear from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";

// Feature Components
import UpdateStudentPayment from "@schoolify/features/user/school/management/studentPayment/components/UpdateStudentPayment";

// Custom Utilities
import { listStudentPaymentColumns } from "@schoolify/features/user/school/management/studentPayment/utilities/listStudentPaymentData";
import { addStudentPaymentData } from "@schoolify/features/user/school/management/studentPayment/utilities/addStudentPaymentData";
import type ListStudentPaymentEntity from "@schoolify/features/user/school/management/studentPayment/types/api/ListStudentPaymentEntity";

// Custom Types
// interface ListStudentProps {}

const ListStudentPayments = () => {
  // Props
  // const {} = props;

  // States
  const [educationYearId, setEducationYearId] = useState("");
  const [studentId, setStudentId] = useState("");

  // Hooks

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { schoolId = "" } = useParams();
  const { data: educationYearData } = useListSummaryEducationYear(schoolId);

  const { data, isLoading } = useListStudentPayment({
    studentId,
    pagination,
    filters,
  });

  const { data: studentsData } = useListStudents({
    schoolId: schoolId,
    pagination: { size: -1 },
    filters: {
      educationYearId: educationYearId,
    },
    disabled: !educationYearId,
  });

  const studentsDataAny: any[] = studentsData?.docs ?? [];
  const studentOptions: OptionType[] = useMapToOptions(studentsDataAny);

  const { mutateAsync: updateStudentPayment } = useUpdateStudentPayment();
  const { mutateAsync: deleteStudentPayment } = useDeleteStudentPayment();

  const educationYearOptions = useMapToOptions(educationYearData);

  // Helpers
  const fieldStateMap = {
    educationYearId: {
      value: educationYearId,
      set: setEducationYearId,
      options: educationYearOptions,
    },
    studentId: {
      value: studentId,
      set: setStudentId,
      options: studentOptions,
    },
  } as const;

  const columns = listStudentPaymentColumns;

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
        onUpdateForm={UpdateStudentPayment}
        onDeleteRow={handleDeleteStudentPayment}
        onDeleteRowGetTitle={(
          row: BaseIdDataEntity<ListStudentPaymentEntity>
        ) => `${row.data?.amount}`}
      />
    </ContentBox>
  );
};
export default ListStudentPayments;
