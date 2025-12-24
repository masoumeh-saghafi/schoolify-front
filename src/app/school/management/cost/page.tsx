// React Type
import { useParams } from 'react-router-dom'

// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'

// Custom Utilities
import { tabCostEndpointsData } from '@schoolify/features/user/school/management/cost/utilities/data'
import routes from '@schoolify/core/utilities/routes'

const SchoolManagementCostPage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.cost.index(schoolId)}
        data={tabCostEndpointsData}
      />
    </>
  )
}

export default SchoolManagementCostPage
