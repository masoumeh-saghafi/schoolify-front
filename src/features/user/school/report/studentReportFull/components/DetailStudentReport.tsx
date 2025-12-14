import ContentBox from '@schoolify/core/components/common/ContentBox'
import { useLocation } from 'react-router-dom'
import Grid from '@schoolify/core/components/base/inputs/Grid'

import DetailField from '@schoolify/core/components/common/DetailField'
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'
import Box from '@schoolify/core/components/base/inputs/Box'
// import useGetUserTicket from "../hooks/useGetUserTicket";
import useGetStudentReport from '../hooks/useGetStudentReport'
import { StudentDebtData } from '../utilities/studentDebtData'
import { columns, StudentCostData } from '../utilities/studentCostData'
import DataTable from '@schoolify/core/components/common/DataTable'
import { StudentInfoData } from '../utilities/StudentInfoData'

interface DetailStudentReportProps {}

const DetailStudentReport = (props: DetailStudentReportProps) => {
  const location = useLocation()
  const queryParams = location.hash.split('?')[1]
  const params = new URLSearchParams(queryParams)
  const educationYearId = params.get('educationYearId') ?? ''
  const studentId = params.get('studentId') ?? ''

  const { data } = useGetStudentReport(educationYearId, studentId)
  const theme = useAppTheme()


  const StudentInfoFields = StudentInfoData(data?.data)
  const StudentDebtFields = StudentDebtData(data?.data)
  const StudentCostFields = StudentCostData(data?.data)

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

     <ContentBox label="هزینه ها">
        <DataTable
          columns={columns}
          rows={StudentCostFields}
          renderCell={(row, col) => {
            const value = row[col.id as keyof typeof row]

            if (typeof value === 'number') return value.toLocaleString()
            return value
          }}
        />
      </ContentBox>
    </Box>
  )
}
export default DetailStudentReport
