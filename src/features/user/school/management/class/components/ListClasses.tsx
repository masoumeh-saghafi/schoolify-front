// React Type
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// MUI Components
import Grid from '@schoolify/core/components/base/inputs/Grid'
import AutocompleteSelect from '@schoolify/core/components/common/AutocompleteSelect'
import UpdateClass from '@schoolify/features/user/school/management/class/components/UpdateClass'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'

// Custom Hooks
import useListSummaryEducationYears from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears'
import useListSummaryEducationLevel from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationLevel'
import useListSummaryEducationGrade from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationGrade'
import useListClass from '@schoolify/features/user/school/management/class/hooks/useListClass'
import useDeleteClass from '@schoolify/features/user/school/management/class/hooks/useDeleteClass'
import useUpdateClass from '@schoolify/features/user/school/management/class/hooks/useUpdateClass'
import useMapToOptions from '@schoolify/core/hooks/common/useMapToOptions'

// Custom Utilities
import { listClassColumns } from '@schoolify/features/user/school/management/class/utilities/listClassData'
import { addClassData } from '@schoolify/features/user/school/management/class/utilities/addClassData'

// Custom Types
// interface ListStudentProps {}

const ListClasses = () => {
  // Props
  // const {} = props;

  // States
  const [educationYearId, setEducationYearId] = useState('')
  const [educationLevelId, setEducationLevelId] = useState('')
  const [educationGradeId, setEducationGradeId] = useState('')

  // Hooks
  const { schoolId = '' } = useParams()

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

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListClass({
    educationGradeId,
    pagination,
    filters
  })


  // Helpers
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

  const columns = listClassColumns

  // Handlers
  const handleUpdateClass = async (id: string, updatedFields: any) => {
    await updateClass({
      data: updatedFields,
      classId: id,
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
        onUpdateForm={UpdateClass}
        onDeleteRow={handleDeleteClass}
        onDeleteRowGetTitle={row =>
          `${row.data.firstName} ${row.data.lastName}`
        }
      />
    </ContentBox>
  )
}
export default ListClasses
