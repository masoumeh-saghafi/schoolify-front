// React Type
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// MUI Components
import Grid from '@schoolify/core/components/base/inputs/Grid'
import AutocompleteSelect from '@schoolify/core/components/common/AutocompleteSelect'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'

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
import { listStudentColumns } from '@schoolify/features/user/school/management/student/utilities/listStudentColumns'
import useListStudentReport from '../hooks/useListStudentReport'
import { listStudentReportColumns } from '../utilities/listStudentColumns'
import { listStudentReportData } from '../utilities/listStudentReportData'
import { tabBoxGenerateFullUrlPath } from '@schoolify/core/components/common/TabBox'
import Box from '@schoolify/core/components/base/inputs/Box'
import Button from '@schoolify/core/components/base/inputs/Button'
import { exportListStudentReportToExcel } from './ExportListStudentReportToExcel'

// Custom Types
// interface ListStudentReportProps {}

const ListStudentReport = () => {
  // Props
  // const {} = props;

  // States
  const [educationYearId, setEducationYearId] = useState('')
  const [educationLevelId, setEducationLevelId] = useState('')
  const [educationGradeId, setEducationGradeId] = useState('')
  const [classId, setClassId] = useState('')
  const navigate = useNavigate()

  // Hooks
  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListStudentReport({
    educationYearId,
    pagination,
    filters:
      //   :
      // {
      //   classRoomId: classId
      // }

      {
        // ...filters,
        educationLevelId: educationLevelId,
        educationGradeId: educationGradeId,
        classRoomId: classId
      }
  })

  const { schoolId = '' } = useParams()
  const { data: educationYearData } = useListSummaryEducationYears(schoolId)

  const { data: educationLevelData } =
    useListSummaryEducationLevel(educationYearId)

  const { data: educationGradeData } =
    useListSummaryEducationGrade(educationLevelId)

  const { data: classData } = useListSummaryClass(educationGradeId)
  // const { data: studentsData } = useListStudents({
  //   schoolId: schoolId,
  //   pagination: pagination,
  //   filters: {
  //     classRoomId: classId
  //   },
  //   disabled: !classId
  // })

  // const { mutateAsync: deleteClass } = useDeleteClass()

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

  const columns = listStudentReportColumns

  // Handlers
  const handleOpenStudentDetails = async (id: string, row: any) => {
    const changeTabUrl = tabBoxGenerateFullUrlPath(
      location.pathname,
      `school?id=${id}`
    )
    navigate(changeTabUrl)
  }
  const handleExportToExcel = () => {
    exportListStudentReportToExcel({ data })
  }

  // Render
  return (
    <ContentBox label=' گزارش دانش آموزان'>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {listStudentReportData.map(field => {
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
        disableUpdateRowButton={true}
        disableDeleteRowButton={true}
        addRowTitle='جزئیات'
        onAddRow={handleOpenStudentDetails}
      />
      <Box display='flex' justifyContent='flex-start' mt={2}>
        <Button
          variant='contained'
          color='primary'
          onClick={handleExportToExcel}
        >
          چاپ گزارش
        </Button>
      </Box>
    </ContentBox>
  )
}
export default ListStudentReport
