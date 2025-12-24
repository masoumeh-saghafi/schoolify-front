// React Type
import { useParams } from 'react-router-dom'

// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'

// Custom Utilities
import routes from '@schoolify/core/utilities/routes'
import { tabEducationLevelEndpointsData } from '@schoolify/features/user/school/management/educationLevel/utilities/data'

const SchoolManagementEducationLevelPage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.educationLevel.index(schoolId)}
        data={tabEducationLevelEndpointsData}
      />
    </>
  )
}

export default SchoolManagementEducationLevelPage
