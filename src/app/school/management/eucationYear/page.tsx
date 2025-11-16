// MUI Components

import TabBox from '@schoolify/core/components/common/TabBox'
import routes from '@schoolify/core/utilities/routes'
import { tabEucationYearEndpointsData } from '@schoolify/features/user/school/management/educationYear/utilities/data'
import { useParams } from 'react-router-dom'

const SchoolManagementEucationYearPage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.educationYear.index(schoolId)}
        data={tabEucationYearEndpointsData}
      />
    </>
  )
}

export default SchoolManagementEucationYearPage

