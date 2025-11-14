// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'

// Feature Components
import { listStudentData } from '@schoolify/features/user/school/management/students/utilities/listStudentData'


// Custom Hooks
import useListStudents from '@schoolify/features/user/school/management/students/hooks/useListStudents'

// React Type
import { useParams } from 'react-router-dom'
import useUpdateEducationYear from '@schoolify/features/user/school/management/educationYears/hooks/useUpdateEducationYear'
import useDeleteEducationYear from '@schoolify/features/user/school/management/educationYears/hooks/useDeleteEducationYear'
import useListEducationYear from '../hooks/useListEducationYear'
import { listEucationYear } from '../utilities/listEucationYear'

// Custom Types
// interface ListStudentProps {}

const ListEucationYear
 = () => {
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

  const { data, isLoading } = useListEducationYear({
    schoolId,
    pagination,
    filters
  })

 const { mutateAsync: updateEducationYear } = useUpdateEducationYear()
const { mutateAsync: deleteEducationYear } = useDeleteEducationYear()

// Helpers
 const columns = listEucationYear

// Handlers
const handleUpdateEducationYear = async (id: string, updatedFields: any) => {
  await updateEducationYear({
    data: updatedFields,
    educationYearId: id,
    schoolId: schoolId
  })
}

const handleDeleteEducationYear = async (id: string, row: any) => {
  await deleteEducationYear({
    educationYearId: id,
    schoolId: schoolId
  })
}

  // Render
  return (
    <ContentBox label='لیست سال های تحصیلی '>
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleUpdateEducationYear}
        onDeleteRow={handleDeleteEducationYear}
        onDeleteRowGetTitle={row =>
          `${row.data.firstName} ${row.data.lastName}`
        }
      />
    </ContentBox>
  )
}
export default ListEucationYear

