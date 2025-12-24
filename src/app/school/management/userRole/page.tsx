// React Type
import { useParams } from 'react-router-dom'

// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'

// Custom Utilities
import routes from '@schoolify/core/utilities/routes'
import { tabUserRoleEndpointsData } from '@schoolify/features/user/school/management/userRole/utilities/data'

const SchoolManagementUserRolePage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.userRoles.index(schoolId)}
        data={tabUserRoleEndpointsData}
      />
    </>
  )
}

export default SchoolManagementUserRolePage
