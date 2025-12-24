// MUI Components
import TabBox from '@schoolify/core/components/common/TabBox'
import routes from '@schoolify/core/utilities/routes'

// Custom Utilities
import { tabCustomerEndpointsData } from '@schoolify/features/admin/customers/utilities/data'

const AdminCustomersPage = () => {
  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.admin.customers.index()}
        data={tabCustomerEndpointsData}
      />
    </>
  )
}

export default AdminCustomersPage
