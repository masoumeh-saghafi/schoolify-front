// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import { useState } from 'react'
import { listClassData } from '../utilities/listClassData'
import useListSummaryEducationYears from '@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears'
import useListSummaryEducationLevel from '@schoolify/features/user/shared/school/hooks/useListSummaryEducationLevel'
import { useParams } from 'react-router-dom'
import useListSummaryEducationGrade from '@schoolify/features/user/shared/school/hooks/useListSummaryEducationGrade'
import useListClass from '../hooks/useListClass'
import useDeleteClass from '../hooks/useDeleteClassStudent'
import useUpdateClass from '../hooks/useUpdateClass'

// Feature Components

// Custom Hooks

// React Type

// Custom Types
// interface ListStudentProps {}

const ListClassStudents  = () => {
  // Props
  // const {} = props;
  const [educationYearId] = useState('')
  const [educationLevelId] = useState('')
  const [educationGradeId] = useState('')

  // Hooks
  const { schoolId = '' } = useParams()

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListClass({
  educationYearId,
    pagination,
    filters
  })
  const { data: educationYearsData } = useListSummaryEducationYears(schoolId)
  const { data: educationLevelsData } =
    useListSummaryEducationLevel(educationYearId)
  const { data: educationGradesData } =
    useListSummaryEducationGrade(educationLevelId)

  const { mutateAsync: updateClass } = useUpdateClass()
  const { mutateAsync: deleteClass } = useDeleteClass()

  // Helpers
  const columns = listClassData

  // Handlers
  const handleUpdateClass = async (id: string, updatedFields: any) => {
    await updateClass({
      data: updatedFields,
      classeId: id,
      educationGradeId: educationGradeId
    })
  }

  const handleDeleteClass = async (id: string, row: any) => {
    await deleteClass({
      classId: id,
      educationGradeId: educationGradeId
    })
  }

  // Render
  return (
    <ContentBox label='لیست کلاس ها '>
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleUpdateClass}
        onDeleteRow={handleDeleteClass}
        onDeleteRowGetTitle={row =>
          `${row.data.firstName} ${row.data.lastName}`
        }
      />
    </ContentBox>
  )
}
export default ListClassStudents


