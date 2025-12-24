// React Type
import { useParams } from 'react-router-dom'

// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'

// Custom Utilities
import { tabEducationGradeEndpointsData } from '@schoolify/features/user/school/management/educationGrade/utilities/data'
import routes from '@schoolify/core/utilities/routes'

const SchoolManagementEducationGradePage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.educationGrade.index(schoolId)}
        data={tabEducationGradeEndpointsData}
      />
    </>
  )
}

export default SchoolManagementEducationGradePage
