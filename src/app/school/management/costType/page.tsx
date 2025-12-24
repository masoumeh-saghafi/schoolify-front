// React Type
import { useParams } from 'react-router-dom'

// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'

// Custom Utilities
import routes from '@schoolify/core/utilities/routes'
import { tabCostTypeEndpointsData } from '@schoolify/features/user/school/management/costType/utilities/data'

const SchoolManagementCostTypePage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.costType.index(schoolId)}
        data={tabCostTypeEndpointsData}
      />
    </>
  )
}

export default SchoolManagementCostTypePage
