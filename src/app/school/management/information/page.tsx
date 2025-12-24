// React Type
import { useParams } from 'react-router-dom'

// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'

// Custom Utilities
import routes from '@schoolify/core/utilities/routes'
import { tabSchoolInfoData } from '@schoolify/features/user/school/management/information/utilities/data'

const SchoolManagementInformationPage = () => {
  // Hooks
  const { schoolId = '' } = useParams()

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.index(schoolId)}
        data={tabSchoolInfoData}
      />
    </>
  )
}

export default SchoolManagementInformationPage
