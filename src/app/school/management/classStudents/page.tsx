// React Type
import { useParams } from 'react-router-dom'

// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'

// Custom Utilities
import routes from '@schoolify/core/utilities/routes'
import { tabClassStudentsEndpointsData } from '@schoolify/features/user/school/management/classStudents/utilities/data'

const SchoolManagementClassStudentsPage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.classStudents.index(schoolId)}
        data={tabClassStudentsEndpointsData}
      />
    </>
  )
}

export default SchoolManagementClassStudentsPage
