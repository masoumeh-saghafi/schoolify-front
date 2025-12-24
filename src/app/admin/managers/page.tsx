// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'
import routes from '@schoolify/core/utilities/routes'

// Custom Utilities
import { tabAdminRoleEndpointsData } from '@schoolify/features/admin/managers/utilities/data'

const AdminManagersPage = () => {
  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.admin.managers.index()}
        data={tabAdminRoleEndpointsData}
      />
    </>
  )
}

export default AdminManagersPage
