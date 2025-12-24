// React Type
import { useParams } from 'react-router-dom'

// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'

// Custom Utilities
import routes from '@schoolify/core/utilities/routes'
import { tabStudentReportSummaryEndpointsData } from '@schoolify/features/user/school/report/students/summary/utilities/data'

const SchoolReportStudentSummaryPage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.report.student.summary.index(schoolId)}
        data={tabStudentReportSummaryEndpointsData}
      />
    </>
  )
}

export default SchoolReportStudentSummaryPage
