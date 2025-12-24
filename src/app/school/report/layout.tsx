// React Types
import { Outlet } from 'react-router-dom'

// MUI Components
import SchoolReportDashboard from '@schoolify/features/user/school/report/dashboard/components/dashboard'

const SchoolReportLayout = () => {
  // Render
  return (
    <>
      <SchoolReportDashboard>
        <Outlet />
      </SchoolReportDashboard>
    </>
  )
}

export default SchoolReportLayout
