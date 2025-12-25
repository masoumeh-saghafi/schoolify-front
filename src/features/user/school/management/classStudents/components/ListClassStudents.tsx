// React Type
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// MUI Components
import Grid from '@schoolify/core/components/base/inputs/Grid'
import AutocompleteSelect from '@schoolify/core/components/common/AutocompleteSelect'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'

// Custom Hooks
import useListSummaryEducationYears from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears'
import useListSummaryEducationLevel from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationLevel'
import useListSummaryEducationGrade from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationGrade'
import useDeleteClass from '@schoolify/features/user/school/management/classStudents/hooks/useDeleteClassStudent'
import useListClass from '@schoolify/features/user/school/management/class/hooks/useListClass'
import useListSummaryClass from '@schoolify/features/user/school/management/shared/hooks/useListSummaryClass'
import useListStudents from '@schoolify/features/user/school/management/shared/hooks/useListStudents'
import useMapToOptions from '@schoolify/core/hooks/common/useMapToOptions'

// Custom Utilities
import { listClassStudentData } from '@schoolify/features/user/school/management/classStudents/utilities/listClassStudentData'
import { listStudentColumns } from '@schoolify/features/user/school/management/student/utilities/listStudentColumns'
import type ListStudentsEntity from '@schoolify/features/user/school/management/student/types/api/ListStudentsEntity'

// Custom Types
// interface ListStudentProps {}

const ListClassStudents = () => {
  // Props
  // const {} = props;

  // States
  const [educationYearId, setEducationYearId] = useState('')
  const [educationLevelId, setEducationLevelId] = useState('')
  const [educationGradeId, setEducationGradeId] = useState('')
  const [classId, setClassId] = useState('')

  // Hooks
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

  const { schoolId = '' } = useParams()
  const { data: educationYearData } = useListSummaryEducationYears(schoolId)

  const { data: educationLevelData } =
    useListSummaryEducationLevel(educationYearId)

  const { data: educationGradeData } =
    useListSummaryEducationGrade(educationLevelId)

  const { data: classData } = useListSummaryClass(educationGradeId)
  const { data: studentsData } = useListStudents({
    schoolId: schoolId,
    pagination: pagination,
    filters: {
      classRoomId: classId
    },
    disabled: !classId
  })

  const { mutateAsync: deleteClass } = useDeleteClass()

  const educationYearOptions = useMapToOptions(educationYearData)
  const educationLevelOptions = useMapToOptions(educationLevelData)
  const educationGradeOptions = useMapToOptions(educationGradeData)
  const classOptions = useMapToOptions(classData)

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
    },
    classId: {
      value: classId,
      set: setClassId,
      options: classOptions
    }
  } as const

  const columns = listStudentColumns

  // Handlers
  const handleDeleteClass = async (id: string, row: any) => {
    await deleteClass({
      classId: classId,
      studentId: id,
      schoolId: schoolId
    })
  }

  // Render
  return (
    <ContentBox label='لیست دانش آموزان کلاس  '>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {listClassStudentData.map(field => {
          const { value, set, options } =
            fieldStateMap[field.name as keyof typeof fieldStateMap]
          return (
            <AutocompleteSelect
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
        data={studentsData}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        disableUpdateRowButton={true}
        onDeleteRow={handleDeleteClass}
        onDeleteRowGetTitle={(row: BaseIdDataEntity<ListStudentsEntity>) =>
          `${row.data?.firstName} ${row.data?.lastName}`
        }
      />
    </ContentBox>
  )
}
export default ListClassStudents
