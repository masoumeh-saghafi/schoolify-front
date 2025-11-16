// MUI Components

import TabBox from '@schoolify/core/components/common/TabBox'
import routes from '@schoolify/core/utilities/routes'
import { tabEucationGradeEndpointsData } from '@schoolify/features/user/school/management/educationGrade/utilities/data'
import { useParams } from 'react-router-dom'

const SchoolManagementEucationGradePage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.educationGrade.index(schoolId)}
        data={tabEucationGradeEndpointsData}
      />
    </>
  )
}

export default SchoolManagementEucationGradePage

