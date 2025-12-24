// React Types
import { useEffect, type ReactNode } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// Core Components
import routes from '@schoolify/core/utilities/routes'

// Feature Components
import Dashboard from '@schoolify/features/shared/dashboard/components'
import type { DashboardSidebarExitButtonDataProps } from '@schoolify/features/shared/dashboard/components/Sidebar'

// Custom Utilities
import { schoolManagementSidebarData } from '@schoolify/features/user/school/management/dashboard/utilities/data'

// Custom Hooks
import useListSummarySchools from '@schoolify/features/user/shared/school/hooks/useListSummarySchools'

// Custom Types
interface SchoolManagementDashboardProps {
  children: ReactNode
}

const SchoolManagementDashboard = (props: SchoolManagementDashboardProps) => {
  // Props
  const { children } = props

  // Hooks
  const { schoolId = '' } = useParams()
  const navigate = useNavigate()
  const { data: schoolData, isLoading } = useListSummarySchools()

  // Helpers
  const school = schoolData?.filter(x => x.id == schoolId)[0]
  const sidebarData = schoolManagementSidebarData(
    schoolId,
    school?.data?.title,
    school?.data?.role
  )

  const exitButtonData: DashboardSidebarExitButtonDataProps = {
    title: 'خروج از داشبورد',
    onClick: () => navigate(routes.profile.baseUrl)
  }

  // Effect
  useEffect(() => {
    if (isLoading) return

    if (!school?.data?.role || school.data.role === 'reporter') {
      navigate(routes.profile.baseUrl)
    }
  }, [schoolData])

  // Render
  return (
    <>
      <Dashboard
        sidebarData={sidebarData}
        sidebarExitButtonData={exitButtonData}
      >
        {children}
      </Dashboard>
    </>
  )
}

export default SchoolManagementDashboard
