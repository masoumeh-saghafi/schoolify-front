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
import { listEducationLevelData } from '../utilities/listEducationLevelData'
import Autocomplete from '@schoolify/core/components/base/inputs/Autocomplete'
import TextField from '@schoolify/core/components/base/inputs/TextField'
import useListSummaryEducationYear from '@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears'
import { useParams } from 'react-router-dom'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import AutocompleteSelect from '@schoolify/core/components/common/AutocompleteSelect'

// Custom Types
// interface ListStudentProps {}

const ListEducationLevel = () => {
  // Props
  // const {} = props;
  const [educationYearId, setEducationYearId] = useState('')

  // Hooks
  const { schoolId = '' } = useParams()
  const { data: educationYearData } = useListSummaryEducationYear(schoolId)

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
  const columns = listEducationLevelData

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
      <Grid container spacing={2} mb={2}>
        <AutocompleteSelect
          label='سال تحصیلی'
          placeholder='لطفا یک سال را انتخاب نمایید'
          options={
            educationYearData?.map(item => ({
              key: item.id,
              value: item.data?.title ?? ''
            })) ?? []
          }
          value={educationYearId}
          onChange={setEducationYearId}
          loading={isLoading}
        />
      </Grid>

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
export default ListEducationLevel
