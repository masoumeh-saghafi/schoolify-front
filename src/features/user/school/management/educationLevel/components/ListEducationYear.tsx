// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'

// Feature Components

// Custom Hooks

// React Type
import useListEducationLevel from '../hooks/useListEducationLevel'
import useDeleteEducationLevel from '../hooks/useDeleteEducationLevel'
import useUpdateEducationLevel from '../hooks/useUpdateEducationLevel'
import { useState } from 'react'
import { listEucationLevelData } from '../utilities/listEucationLevelData'

// Custom Types
// interface ListStudentProps {}

const ListEucationLevel = () => {
  // Props
  // const {} = props;
const [educationYearId] = useState('')

  // Hooks
  // const { schoolId = '' } = useParams()

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListEducationLevel({
    educationYearId,
    pagination,
    filters
  })

  const { mutateAsync: updateEducationLevel } = useUpdateEducationLevel()
  const { mutateAsync: deleteEducationLevel } = useDeleteEducationLevel()

  // Helpers
  const columns = listEucationLevelData

  // Handlers
  const handleUpdateEducationLevel = async (id: string, updatedFields: any) => {
    await updateEducationLevel({
      data: updatedFields,
      educationLevelId: id,
      educationYearId: educationYearId
    })
  }

  const handleDeleteEducationLevel = async (id: string, row: any) => {
    await deleteEducationLevel({
      educationLevelId: id,
      educationYearId: educationYearId
    })
  }

  // Render
  return (
    <ContentBox label='لیست مقطع های تحصیلی '>
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleUpdateEducationLevel}
        onDeleteRow={handleDeleteEducationLevel}
        onDeleteRowGetTitle={row =>
          `${row.data.firstName} ${row.data.lastName}`
        }
      />
    </ContentBox>
  )
}
export default ListEucationLevel
