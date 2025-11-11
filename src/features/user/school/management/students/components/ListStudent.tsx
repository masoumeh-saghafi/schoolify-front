import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import { useParams } from "react-router-dom";
import useListStudents from "../hooks/useListStudents";
import { updateStudent, deleteStudent } from "../utilities/api/api";
import { listStudentData } from "../utilities/listStudentData";
import useUpdateStudent from "../hooks/useUpdateStudent";
import useDeleteStudent from "../hooks/useDeleteStudent";

interface ListStudentProps {}

const ListStudent = (props: ListStudentProps) => {
  const {} = props;
  const { schoolId = "" } = useParams();

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListStudents({
    schoolId,
    pagination,
    filters,
  });

  const { mutateAsync: updateStudent } = useUpdateStudent();
  const { mutateAsync: deleteStudent } = useDeleteStudent();

  const columns = listStudentData;
  const handleChangeStudentInfo = async (id: string, updatedFields: any) => {
    await updateStudent({
      data: updatedFields,
      studentId: id,
      schoolId: schoolId,
    });
  };

  const handleDelete = async (id: string, row: any) => {
    await deleteStudent({
      studentId: id,
      schoolId: schoolId,
    });
  };

  return (
    <ContentBox label="لیست دانش آموزان">
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleChangeStudentInfo}
        onDeleteRow={handleDelete}
        onDeleteRowGetTitle={(row) =>
          `${row.data.firstName} ${row.data.lastName}`
        }
      />
    </ContentBox>
  );
};
export default ListStudent;
