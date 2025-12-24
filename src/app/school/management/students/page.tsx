// React Type
import { useParams } from 'react-router-dom'

// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'

// Custom Utilities
import routes from '@schoolify/core/utilities/routes'
import { tabSchoolStudentData } from '@schoolify/features/user/school/management/student/utilities/data'

const SchoolManagementStudentPage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.student.index(schoolId)}
        data={tabSchoolStudentData}
      />
    </>
  )
}

export default SchoolManagementStudentPage
