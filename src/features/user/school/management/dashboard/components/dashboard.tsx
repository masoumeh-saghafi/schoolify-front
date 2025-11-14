// Feature Components
import Dashboard from '@schoolify/features/shared/dashboard/components'

// Custom Utilities
import { schoolManagementSidebarData } from '@schoolify/features/user/school/management/dashboard/utilities/data'

// React Types
import type { ReactNode } from 'react'
import { useParams } from 'react-router-dom'

// Custom Types
interface SchoolManagementDashboardProps {
  children: ReactNode
}

const SchoolManagementDashboard = (props: SchoolManagementDashboardProps) => {
  const { schoolId = '' } = useParams()

  // Props
  const { children } = props
  const sidebarData = schoolManagementSidebarData(schoolId)

  // Render
  return (
    <>
      <Dashboard sidebarData={sidebarData}>{children}</Dashboard>
    </>
  )
}

export default SchoolManagementDashboard
