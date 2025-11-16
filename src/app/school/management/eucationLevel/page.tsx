// MUI Components

import TabBox from '@schoolify/core/components/common/TabBox'
import routes from '@schoolify/core/utilities/routes'
import { tabEucationLevelEndpointsData } from '@schoolify/features/user/school/management/educationLevel/utilities/data'
import { useParams } from 'react-router-dom'

const SchoolManagementEucationLevelPage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.educationLevel.index(schoolId)}
        data={tabEucationLevelEndpointsData}
      />
    </>
  )
}

export default SchoolManagementEucationLevelPage

