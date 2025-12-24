// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'
import routes from '@schoolify/core/utilities/routes'

// Custom Utilities
import { tabAdminPyamentEndpointsData } from '@schoolify/features/admin/payments/utilities/data'

const AdminPaymentsPage = () => {
  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.admin.payments.index()}
        data={tabAdminPyamentEndpointsData}
      />
    </>
  )
}

export default AdminPaymentsPage
