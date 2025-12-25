// React Type
import { useParams } from 'react-router-dom'
import { useState } from 'react'

// MUI Components
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import AutocompleteSelect from '@schoolify/core/components/common/AutocompleteSelect'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'

// Feature Components
import UpdateEducationLGrade from '@schoolify/features/user/school/management/educationGrade/components/UpdateEducationLGrade'

// Custom Hooks
import useListEducationGrade from '@schoolify/features/user/school/management/educationGrade/hooks/useListEducationGrade'
import useUpdateEducationGrade from '@schoolify/features/user/school/management/educationGrade/hooks/useUpdateEducationGrade'
import useDeleteEducationGrade from '@schoolify/features/user/school/management/educationGrade/hooks/useDeleteEducationGrade'
import useListSummaryEducationYear from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears'
import useMapToOptions from '@schoolify/core/hooks/common/useMapToOptions'
import useListSummaryEducationLevel from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationLevel'

// Custom Utilities
import { listEducationGradeColumns } from '@schoolify/features/user/school/management/educationGrade/utilities/listEducationGradeColumns'
import { addEducationLGradeData } from '@schoolify/features/user/school/management/educationGrade/utilities/addEducationLGradeData'
import type ListEducationGradeEntity from '@schoolify/features/user/school/management/educationGrade/types/api/ListEducationGradeEntity'

// Custom Types
// interface ListStudentProps {}

const ListEducationGrade = () => {
  // Props
  // const {} = props;

  // States
  const [educationYearId, setEducationYearId] = useState('')
  const [educationLevelId, setEducationLevelId] = useState('')

  // Hooks
  const { schoolId = '' } = useParams()
  const { data: educationYearData } = useListSummaryEducationYear(schoolId)
  const { data: educationLevelData } =
    useListSummaryEducationLevel(educationYearId)
  
  const { mutateAsync: updateEducationGrade } = useUpdateEducationGrade()
  const { mutateAsync: deleteEducationGrade } = useDeleteEducationGrade()

  const educationYearOptions = useMapToOptions(educationYearData)
  const educationLevelOptions = useMapToOptions(educationLevelData)

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListEducationGrade({
    educationLevelId,
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
    }
  } as const

  const columns = listEducationGradeColumns

  // Handlers
  const handleUpdateEducationGrade = async (id: string, updatedFields: any) => {
    await updateEducationGrade({
      data: updatedFields,
      educationGradeId: id,
      educationLevelId: educationLevelId
    })
  }

  const handleDeleteEducationGrade = async (id: string, row: any) => {
    await deleteEducationGrade({
      educationGradeId: id,
      educationLevelId: educationLevelId
    })
  }

  // Render
  return (
    <ContentBox label='لیست مقطع های تحصیلی '>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {addEducationLGradeData.map(field => {
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
        onUpdateRow={handleUpdateEducationGrade}
        onUpdateForm={UpdateEducationLGrade}
        onDeleteRow={handleDeleteEducationGrade}
        onDeleteRowGetTitle={(row:BaseIdDataEntity<ListEducationGradeEntity> )=> `${row.data?.title}`}
      />
    </ContentBox>
  )
}
export default ListEducationGrade
