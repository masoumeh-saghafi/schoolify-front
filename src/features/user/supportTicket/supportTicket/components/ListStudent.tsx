// React Type
import { useParams } from 'react-router-dom'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'

// Custom Utilities
import { listStudentColumns } from '@schoolify/features/user/school/management/student/utilities/listStudentColumns'

// Feature Components
import UpdateStudent from '@schoolify/features/user/school/management/student/components/UpdateStudent'

// Custom Hooks
import useListStudents from '@schoolify/features/user/school/management/shared/hooks/useListStudents'
import useUpdateStudent from '@schoolify/features/user/school/management/student/hooks/useUpdateStudent'
import useDeleteStudent from '@schoolify/features/user/school/management/student/hooks/useDeleteStudent'


// Custom Types
interface ListStudentProps {}

const ListStudent = (props:ListStudentProps) => {
  // Props
  // const {} = props;

  // Hooks
  const { schoolId = '' } = useParams()

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListStudents({
    schoolId,
    pagination,
    filters
  })

  const { mutateAsync: updateStudent } = useUpdateStudent()
  const { mutateAsync: deleteStudent } = useDeleteStudent()

  // Helpers
  const columns = listStudentColumns

  // Handlers
  const handleUpdateStudentInfo = async (id: string, updatedFields: any) => {
    await updateStudent({
      data: updatedFields,
      studentId: id,
      schoolId: schoolId
    })
  }

  const handleDelete = async (id: string, row: any) => {
    await deleteStudent({
      studentId: id,
      schoolId: schoolId
    })
  }

  // Render
  return (
    <ContentBox label='لیست دانش آموزان'>
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleUpdateStudentInfo}
        onUpdateForm={UpdateStudent}
        onDeleteRow={handleDelete}
        onDeleteRowGetTitle={row =>
          `${row.data.firstName} ${row.data.lastName}`
        }
      />
    </ContentBox>
  )
}
export default ListStudent
