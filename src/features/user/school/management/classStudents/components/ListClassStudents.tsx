// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import { useState } from 'react'
import useListSummaryEducationYears from '@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears'
import useListSummaryEducationLevel from '@schoolify/features/user/shared/school/hooks/useListSummaryEducationLevel'
import { useParams } from 'react-router-dom'
import useListSummaryEducationGrade from '@schoolify/features/user/shared/school/hooks/useListSummaryEducationGrade'
import useDeleteClass from '../hooks/useDeleteClassStudent'
import useListClass from '../../class/hooks/useListClass'
import useUpdateClass from '../../class/hooks/useUpdateClass'
import useListSummaryClass from '@schoolify/features/user/shared/school/hooks/useListSummaryClass'
import useMapToOptions from '@schoolify/core/hooks/common/useMapToOptions'
import { listStudentData } from '../../student/utilities/listStudentData'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import AutocompleteSelect from '@schoolify/core/components/common/AutocompleteSelect'
import { addClassStudentData } from '../utilities/addClassStudentData'
import useListSummarySchools from '@schoolify/features/user/shared/school/hooks/useListSummarySchools'
import useListStudents from '@schoolify/features/user/shared/school/hooks/useListStudents'
import { useWatch } from 'react-hook-form'

// Feature Components

// Custom Hooks

// React Type

// Custom Types
// interface ListStudentProps {}

const ListClassStudents = () => {
  // Props
  // const {} = props;
 const [educationYearId, setEducationYearId] = useState('')
const [educationLevelId, setEducationLevelId] = useState('')
const [educationGradeId, setEducationGradeId] = useState('')
const [classId, setClasseId] = useState('')
const [studentId, setStudentId] = useState('')


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
    educationGradeId,
    pagination,
    filters
  })
    const [studentSearchText, setStudentSearchText] = useState("");
const selectedClassId = classId

  const { data: educationYearData } = useListSummaryEducationYears(schoolId)
  
  const { data: educationLevelData } =
    useListSummaryEducationLevel(educationYearId)
  
  const { data: educationGradeData } =
    useListSummaryEducationGrade(educationLevelId)

  const { data: classData } =
  useListSummaryClass(educationGradeId)
const { data: studentsData } = useListStudents({
  schoolId: schoolId,
  filters: {
    classRoomId: selectedClassId,
    identityCode: `%${studentSearchText}%`
  },
  disabled: !selectedClassId
})
  const fixedStudents = studentsData?.docs?.map(item => ({
  ...item,
  data: {
    ...item.data,
    identityCode: item.data?.identityCode?.toString()
  }
}))


  const { mutateAsync: updateClass } = useUpdateClass()
  const { mutateAsync: deleteClass } = useDeleteClass()

    const educationYearOptions = useMapToOptions(educationYearData);
    const educationLevelOptions = useMapToOptions(educationLevelData);
  const educationGradeOptions = useMapToOptions(educationGradeData);
  const classOptions = useMapToOptions(classData)
  const studentOptions = useMapToOptions(fixedStudents)




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
    set: setClasseId,
    options: classOptions
  },
  studentId: {
    value: studentId,
    set: setStudentId,
    options: studentOptions
  }
} as const


  // Helpers
  const columns = listStudentData

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
      classId: classId,
      studentId:id,
      schoolId: schoolId,
    })
  }

  // Render
  return (
    <ContentBox label='لیست دانش آموزان کلاس  '>
      <Grid container spacing={2} sx={{ mb: 2 }}>
  {addClassStudentData.map(field => {
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
export default ListClassStudents
