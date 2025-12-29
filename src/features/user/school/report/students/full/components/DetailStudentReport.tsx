// React Type
import { useLocation } from 'react-router-dom'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import DetailField from '@schoolify/core/components/common/DetailField'
import DataTable from '@schoolify/core/components/common/DataTable'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'

// Custom Hooks
import useGetStudentReport from '@schoolify/features/user/school/report/students/full/hooks/useGetStudentReport'

// Custom Utilities
import { StudentDebtData } from '@schoolify/features/user/school/report/students/full/utilities/studentDebtData'
import {
  studentCostColumns,
  StudentCostData
} from '@schoolify/features/user/school/report/students/full/utilities/studentCostData'
import { StudentInfoData } from '@schoolify/features/user/school/report/students/full/utilities/studentInfoData'
import {
  studentPaymentColumns,
  StudentPaymentData
} from '@schoolify/features/user/school/report/students/full/utilities/studentPaymentData'
import Button from '@schoolify/core/components/base/inputs/Button'
import { exportStudentFinancialReportToExcel } from '@schoolify/features/user/school/report/students/full/components/ExportStudentFinancialReportToExcel'

// Custom Types
interface DetailStudentReportProps {}

const DetailStudentReport = (props: DetailStudentReportProps) => {
  // Hooks
  const location = useLocation()
  const queryParams = location.hash.split('?')[1]
  const params = new URLSearchParams(queryParams)
  const educationYearId = params.get('educationYearId') ?? ''
  const studentId = params.get('studentId') ?? ''

  const { data } = useGetStudentReport(educationYearId, studentId)
  const handleExportToExcel = () => {
    if (data?.data) {
      exportStudentFinancialReportToExcel({ student: data.data })
    }
  }
  // Helpers
  const StudentInfoFields = StudentInfoData(data?.data)
  const StudentDebtFields = StudentDebtData(data?.data)
  const StudentCostFields = StudentCostData(data?.data)
  const StudentPaymentFields = StudentPaymentData(data?.data)

  if (!educationYearId && !studentId) return <>تیکت نامعتبر</>

  // Render
  return (
    <Box>
      <ContentBox label='مشخصات دانش آموز'>
        <Grid container spacing={2} sx={{ m: 2 }}>
          {StudentInfoFields.map((field, index) => (
            <DetailField key={index} label={field.label} value={field.value} />
          ))}
        </Grid>
      </ContentBox>
      <ContentBox label='وضعیت مالی'>
        <Grid container spacing={2} sx={{ m: 2 }}>
          {StudentDebtFields.map((field, index) => (
            <DetailField key={index} label={field.label} value={field.value} />
          ))}
        </Grid>
      </ContentBox>

      <ContentBox label='هزینه ها'>
        <DataTable
          columns={studentCostColumns}
          rows={StudentCostFields}
          renderCell={(row, col) => {
            const value = row[col.id as keyof typeof row]

            if (typeof value === 'number') return value.toLocaleString()
            return value
          }}
        />
      </ContentBox>
      <ContentBox label='سابقه پرداخت'>
        <DataTable
          columns={studentPaymentColumns}
          rows={StudentPaymentFields}
          renderCell={(row, col) => {
            const value = row[col.id as keyof typeof row]

            if (typeof value === 'number') {
              return value.toLocaleString()
            }

            if (col.id === 'createDate') {
              return <FormattedDate date={value as number | null} />
            }

            return value ?? ''
          }}
        />
      </ContentBox>
      <Box display='flex' justifyContent='flex-start' mt={2}>
        <Button
          variant='contained'
          color='primary'
          onClick={handleExportToExcel}
        >
          خروجی اکسل گزارش
        </Button>
      </Box>
    </Box>
  )
}
export default DetailStudentReport
