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
import useDeleteClass from '../hooks/useDeleteClass'
import useUpdateClass from '../hooks/useUpdateClass'
import useMapToOptions from '@schoolify/core/hooks/common/useMapToOptions'
import { addClassData } from '../utilities/addClassData'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import AutocompleteSelect from '@schoolify/core/components/common/AutocompleteSelect'

// Feature Components

// Custom Hooks

// React Type

// Custom Types
// interface ListStudentProps {}

const ListClasses = () => {
  // Props
  // const {} = props;
  const [educationYearId, setEducationYearId] = useState('')
  const [educationLevelId, setEducationLevelId] = useState('')
  const [educationGradeId, setEducationGradeId] = useState('')

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
  const { data: educationYearData } = useListSummaryEducationYears(schoolId)
  const { data: educationLevelData } =
    useListSummaryEducationLevel(educationYearId)
  const { data: educationGradeData } =
    useListSummaryEducationGrade(educationLevelId)

  const { mutateAsync: updateClass } = useUpdateClass()
  const { mutateAsync: deleteClass } = useDeleteClass()
  const educationYearOptions = useMapToOptions(educationYearData)
  const educationLevelOptions = useMapToOptions(educationLevelData)
  const educationGradeOptions = useMapToOptions(educationGradeData)

  const fieldStateMap = {
    educationYearId: {
      value: educationYearId,
      set: setEducationYearId,
      options: educationYearOptions
    },
    educationLevelId: {
      value: educationLevelId,
      set: setEducationLevelId,
      options: educationLevelOptions
    },
    educationGradeId: {
      value: educationGradeId,
      set: setEducationGradeId,
      options: educationGradeOptions
    }
  } as const

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
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {addClassData.map(field => {
          const { value, set, options } =
            fieldStateMap[field.name as keyof typeof fieldStateMap]
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
          )
        })}
      </Grid>

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
export default ListClasses
