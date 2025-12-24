// React Types
import { Outlet } from 'react-router-dom'

// MUI Components
import SchoolManagementDashboard from '@schoolify/features/user/school/management/dashboard/components/dashboard'

const SchoolManagementLayout = () => {
  // Render
  return (
    <>
      <SchoolManagementDashboard>
        <Outlet />
      </SchoolManagementDashboard>
    </>
  )
}

export default SchoolManagementLayout
