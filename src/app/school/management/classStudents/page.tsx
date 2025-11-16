// MUI Components

import TabBox from '@schoolify/core/components/common/TabBox'
import routes from '@schoolify/core/utilities/routes'
import { tabClassEndpointsData } from '@schoolify/features/user/school/management/class/utilities/data'
import { useParams } from 'react-router-dom'

const SchoolManagementClassStudentsPage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.classes.index(schoolId)}
        data={tabClassEndpointsData}
      />
    </>
  )
}

export default SchoolManagementClassStudentsPage

